import axios from 'axios';

/**
 * Piston API Service
 * Handles code compilation and execution using Piston public API
 * 
 * API Endpoint: https://emkc.org/api/v2/piston
 * Documentation: https://github.com/engineer-man/piston
 */

// Piston API Configuration
const PISTON_API_URL = 'https://emkc.org/api/v2/piston';

/**
 * Execute code and get result
 * Piston API executes code immediately (no polling needed)
 * 
 * @param {string} sourceCode - The source code to execute
 * @param {string} language - Language name (python, c, cpp, java, javascript)
 * @param {string} version - Language version
 * @param {string} stdin - Standard input
 * @returns {Promise<Object>} - Returns execution result with output/error
 */
export const executeCode = async (sourceCode, language, version, stdin = '') => {
  try {
    // Step 1: Execute the code (Piston runs immediately, no polling needed)
    const response = await axios.post(
      `${PISTON_API_URL}/execute`,
      {
        language: language,
        version: version,
        files: [
          {
            name: getFileName(language),
            content: sourceCode,
          },
        ],
        stdin: stdin,
        args: [],
        compile_timeout: 10000, // 10 seconds
        run_timeout: 3000, // 3 seconds
        compile_memory_limit: -1,
        run_memory_limit: -1,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    const result = response.data;

    // Step 2: Format and return the result
    return {
      success: !result.compile || result.compile.code === 0,
      output: result.run ? result.run.stdout : '',
      error: getErrorMessage(result),
      status: getStatus(result),
      time: null, // Piston doesn't return execution time
      memory: null, // Piston doesn't return memory usage
    };
  } catch (error) {
    console.error('Error executing code:', error);
    return {
      success: false,
      output: '',
      error: error.response?.data?.message || error.message || 'Failed to execute code. Please try again.',
      status: 'Error',
      time: null,
      memory: null,
    };
  }
};

/**
 * Get appropriate filename for the language
 * @param {string} language - Language name
 * @returns {string} - Filename with extension
 */
const getFileName = (language) => {
  const fileNames = {
    python: 'main.py',
    c: 'main.c',
    cpp: 'main.cpp',
    java: 'Main.java',
    javascript: 'main.js',
  };
  return fileNames[language] || 'main.txt';
};

/**
 * Extract error message from result
 * @param {Object} result - Piston API result
 * @returns {string} - Error message
 */
const getErrorMessage = (result) => {
  // Check for compilation errors
  if (result.compile && result.compile.stderr) {
    return result.compile.stderr;
  }
  
  // Check for runtime errors
  if (result.run && result.run.stderr) {
    return result.run.stderr;
  }
  
  // Check for compilation failure
  if (result.compile && result.compile.code !== 0) {
    return result.compile.output || 'Compilation failed';
  }
  
  // Check for runtime failure
  if (result.run && result.run.code !== 0) {
    return result.run.output || 'Runtime error occurred';
  }
  
  return '';
};

/**
 * Get execution status
 * @param {Object} result - Piston API result
 * @returns {string} - Status description
 */
const getStatus = (result) => {
  // Check compilation
  if (result.compile) {
    if (result.compile.code !== 0) {
      return 'Compilation Error';
    }
  }
  
  // Check runtime
  if (result.run) {
    if (result.run.code === 0) {
      return 'Success';
    } else {
      return 'Runtime Error';
    }
  }
  
  return 'Unknown';
};

/**
 * Get list of available runtimes from Piston API
 * @returns {Promise<Array>} - Returns array of available runtimes
 */
export const getRuntimes = async () => {
  try {
    const response = await axios.get(`${PISTON_API_URL}/runtimes`);
    return response.data;
  } catch (error) {
    console.error('Error fetching runtimes:', error);
    return [];
  }
};