import React, { useState, useEffect } from 'react';
import Editor from '@monaco-editor/react';
import { LANGUAGES, getLanguageById } from '../utils/languages';
import { executeCode } from '../utils/api';
import './Compiler.css';

/**
 * Compiler Page Component
 * Main online compiler interface with Monaco editor and code execution
 */
const Compiler = () => {
  // State management
  const [selectedLanguage, setSelectedLanguage] = useState(LANGUAGES[0]); // Default: Python
  const [code, setCode] = useState(LANGUAGES[0].defaultCode);
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [executionStats, setExecutionStats] = useState(null);

  // Update code when language changes
  useEffect(() => {
    setCode(selectedLanguage.defaultCode);
    setOutput('');
    setExecutionStats(null);
  }, [selectedLanguage]);

  /**
   * Handle language selection change
   */
  const handleLanguageChange = (e) => {
    const languageId = e.target.value; // Keep as string, don't parse as int
    const language = getLanguageById(languageId);
    setSelectedLanguage(language);
  };

  /**
   * Handle code execution
   */
  const handleRunCode = async () => {
    // Clear previous output
    setOutput('');
    setExecutionStats(null);
    setIsLoading(true);

    try {
      // Execute code using Piston API
      const result = await executeCode(
        code, 
        selectedLanguage.id, 
        selectedLanguage.version, 
        input
      );

      // Display output or error
      if (result.success) {
        setOutput(result.output || 'Program executed successfully with no output.');
        setExecutionStats({
          status: result.status,
        });
      } else {
        setOutput(result.error || 'An error occurred during execution.');
        setExecutionStats({
          status: result.status,
        });
      }
    } catch (error) {
      setOutput(`Error: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  /**
   * Handle editor change
   */
  const handleEditorChange = (value) => {
    setCode(value || '');
  };

  /**
   * Handle clear output
   */
  const handleClearOutput = () => {
    setOutput('');
    setExecutionStats(null);
  };

  /**
   * Handle reset code
   */
  const handleResetCode = () => {
    setCode(selectedLanguage.defaultCode);
    setInput('');
    setOutput('');
    setExecutionStats(null);
  };

  return (
    <div className="compiler-page">
      <div className="container-fluid px-4 py-4">
        {/* Header Section */}
        <div className="compiler-header fade-in">
          <h1 className="page-title">
            <span className="title-icon">{'</>'}</span>
            Online Compiler
          </h1>
          <p className="page-subtitle">
            Write, compile, and execute code in real-time
          </p>
        </div>

        {/* Main Compiler Interface */}
        <div className="compiler-container">
          {/* Left Panel - Editor */}
          <div className="editor-panel slide-in-left">
            {/* Editor Controls */}
            <div className="editor-controls">
              <div className="control-group">
                <label htmlFor="language-select" className="control-label">
                  Language:
                </label>
                <select
                  id="language-select"
                  className="language-select"
                  value={selectedLanguage.id}
                  onChange={handleLanguageChange}
                  disabled={isLoading}
                >
                  {LANGUAGES.map((lang) => (
                    <option key={lang.id} value={lang.id}>
                      {lang.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="control-actions">
                <button
                  className="btn-action btn-reset"
                  onClick={handleResetCode}
                  disabled={isLoading}
                  title="Reset to default code"
                >
                  <span className="btn-icon">↻</span>
                  Reset
                </button>
              </div>
            </div>

            {/* Code Editor */}
            <div className="editor-wrapper">
              <Editor
                height="500px"
                language={selectedLanguage.monacoMode}
                value={code}
                onChange={handleEditorChange}
                theme="vs-dark"
                options={{
                  fontSize: 14,
                  minimap: { enabled: false },
                  scrollBeyondLastLine: false,
                  automaticLayout: true,
                  tabSize: 4,
                  wordWrap: 'on',
                  lineNumbers: 'on',
                  renderWhitespace: 'selection',
                  bracketPairColorization: { enabled: true },
                }}
              />
            </div>

            {/* Input Section */}
            <div className="input-section">
              <div className="input-header">
                <label htmlFor="stdin-input" className="input-label">
                  Input (stdin):
                </label>
                <span className="input-hint">
                  Provide input for your program (one line at a time)
                </span>
              </div>
              <textarea
                id="stdin-input"
                className="input-textarea"
                placeholder="Enter input here..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                rows={4}
                disabled={isLoading}
              />
            </div>

            {/* Run Button */}
            <div className="run-section">
              <button
                className="btn-run"
                onClick={handleRunCode}
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <span className="spinner"></span>
                    Executing...
                  </>
                ) : (
                  <>
                    <span className="run-icon">▶</span>
                    Run Code
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Right Panel - Output */}
          <div className="output-panel slide-in-right">
            <div className="output-header">
              <h2 className="output-title">
                <span className="output-icon">📋</span>
                Output
              </h2>
              {output && (
                <button
                  className="btn-clear"
                  onClick={handleClearOutput}
                  title="Clear output"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Execution Stats */}
            {executionStats && (
              <div className="execution-stats">
                <div className="stat-item">
                  <span className="stat-label">Status:</span>
                  <span className={`stat-value status-${executionStats.status === 'Success' ? 'success' : 'error'}`}>
                    {executionStats.status}
                  </span>
                </div>
              </div>
            )}

            {/* Output Console */}
            <div className="output-console">
              {isLoading ? (
                <div className="loading-state">
                  <div className="loading-spinner"></div>
                  <p className="loading-text">Executing your code...</p>
                  <p className="loading-subtext">This may take a few seconds</p>
                </div>
              ) : output ? (
                <pre className="output-content">{output}</pre>
              ) : (
                <div className="empty-state">
                  <div className="empty-icon">🚀</div>
                  <p className="empty-text">No output yet</p>
                  <p className="empty-subtext">
                    Click "Run Code" to execute your program
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Compiler;