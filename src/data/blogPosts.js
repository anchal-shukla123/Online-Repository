const blogPosts = [
  // ─────────────────────────────────────────────────────────────────────────────
  // POST 1
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: 1,
    title: "How to Use an Online Compiler: A Complete Beginner's Guide",
    slug: "how-to-use-online-compiler-beginners-guide",
    metaTitle: "How to Use an Online Compiler: Complete Beginner's Guide 2026",
    metaDescription:
      "Learn how to use online compilers to write and run code in your browser. Step-by-step guide for beginners with Python, Java, C++, and JavaScript examples.",
    author: "CodeRunner Team",
    date: "2026-01-28",
    readTime: "8 min read",
    category: "Tutorials",
    tags: ["online compiler", "beginners", "coding tutorial"],
    featuredImage: "/blog/online-compiler-guide.jpg",
    excerpt:
      "Discover how online compilers revolutionize coding by letting you write, compile, and run code directly in your browser without any setup.",
    content: [
      {
        type: "h1",
        text: "How to Use an Online Compiler: A Complete Beginner's Guide",
      },
      {
        type: "p",
        text: "Are you tired of spending hours installing development environments just to write a simple program? Online compilers have revolutionized the way we code, making programming accessible to everyone with just a web browser. In this comprehensive guide we explore everything you need to know about using an online compiler effectively.",
      },
      { type: "h2", text: "What is an Online Compiler?" },
      {
        type: "p",
        text: "An online compiler is a web-based tool that allows you to write, compile, and execute code directly in your browser without installing any software on your machine. Think of it as a fully featured development environment that lives in the cloud — accessible from anywhere, on any device, at any time.",
      },
      { type: "h3", text: "Key Benefits of Online Compilers" },
      {
        type: "p",
        text: "Instant Access means no installation is required. Just open your browser and start coding immediately. Whether you are on Windows, Mac, Linux, or even a mobile device, online compilers work seamlessly across all platforms without a single configuration step.",
      },
      {
        type: "p",
        text: "No Setup Required means you can forget about configuring compilers, setting up environment variables, or fighting dependency conflicts. Everything works out of the box. Beginners can focus entirely on learning programming concepts instead of getting overwhelmed by setup procedures.",
      },
      {
        type: "p",
        text: "Perfect for Learning means students and hobbyists get instant feedback on their code without administrative barriers. You can try a new language in seconds — switching from Python to Java to C++ with just a dropdown click.",
      },
      { type: "h2", text: "How Online Compilers Work" },
      {
        type: "p",
        text: "When you click the Run button, several things happen behind the scenes in milliseconds. First, your code is securely transmitted to a remote server. The server then compiles or interprets your code using the appropriate language runtime. The program executes inside a sandboxed container with limited permissions. Finally, the output — including any errors — is sent back to your browser and displayed instantly.",
      },
      { type: "h3", text: "Security and Sandboxing" },
      {
        type: "p",
        text: "Modern online compilers use containerization and sandboxing to ensure user code runs safely without affecting other users or the host server. Each execution gets its own isolated environment with strict CPU time limits, memory caps, and no access to the network or filesystem.",
      },
      { type: "h2", text: "Writing Your First Program" },
      {
        type: "p",
        text: "Let us write your very first program together. Open the CodeRunner compiler, select Python from the language dropdown, and type the following code into the editor.",
      },
      {
        type: "code",
        lang: "python",
        text: 'print("Hello, World!")\nname = input("What is your name? ")\nprint(f"Nice to meet you, {name}!")',
      },
      {
        type: "p",
        text: "Type your name in the standard input box below the editor and click Run Code. You will see your program greet you by name in the output panel on the right — all without installing a single tool.",
      },
      { type: "h2", text: "Supported Programming Languages" },
      {
        type: "p",
        text: "CodeRunner supports Python 3 (ideal for beginners and data science), Java (enterprise and Android development), C and C++ (system programming and competitive coding), and JavaScript via Node.js (web development and scripting). More languages are continuously being added.",
      },
      { type: "h2", text: "Common Use Cases" },
      {
        type: "p",
        text: "Online compilers shine in several scenarios. Students use them to complete homework and practice exercises without needing admin rights to install software. Educators use them to demonstrate concepts live in class. Developers use them to quickly test a snippet or prototype an idea. Interviewees use them to practice coding challenges anywhere.",
      },
      { type: "h2", text: "Tips for Maximum Productivity" },
      {
        type: "p",
        text: "Use the stdin input box for programs that require user input. Reset the editor with the Reset button when you want to start fresh. Take advantage of the Monaco editor's auto-complete and syntax highlighting to write code faster. Bookmark your favourite programs by copying the code into a local file.",
      },
      { type: "h2", text: "Limitations to Be Aware Of" },
      {
        type: "p",
        text: "Online compilers come with some intentional restrictions. Programs must complete within a few seconds to prevent abuse. Large in-memory datasets may hit memory caps. Direct filesystem access is disabled for security. Outbound network requests from executed code are blocked. For most learning and testing tasks these limits are never an issue.",
      },
      { type: "h2", text: "Conclusion" },
      {
        type: "p",
        text: "Online compilers democratize programming by removing every barrier between a beginner and their first line of code. Whether you are a student, a professional, or simply curious, an online compiler gives you a fast and powerful coding environment at zero cost. Head over to the CodeRunner compiler right now and write your first program — no installation, no setup, just pure coding.",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // POST 2
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: 2,
    title: "Python Programming for Absolute Beginners: Your First Steps",
    slug: "python-programming-for-beginners",
    metaTitle: "Python Programming for Beginners: Learn Python from Scratch 2026",
    metaDescription:
      "Start your Python programming journey with this complete beginner's guide. Learn Python basics, syntax, and write your first program in minutes.",
    author: "CodeRunner Team",
    date: "2026-01-27",
    readTime: "10 min read",
    category: "Python",
    tags: ["python", "beginners", "programming"],
    featuredImage: "/blog/python-beginners.jpg",
    excerpt:
      "Python is the perfect first programming language. Learn why millions of beginners choose Python and write your first program today.",
    content: [
      {
        type: "h1",
        text: "Python Programming for Absolute Beginners: Your First Steps",
      },
      {
        type: "p",
        text: "Python has become the world's most popular programming language for beginners, and for very good reason. Its clean, readable syntax, vast standard library, and enormous community support make it the perfect starting point for your programming journey. In this guide you will go from zero to writing real, working Python programs.",
      },
      { type: "h2", text: "Why Learn Python First?" },
      {
        type: "p",
        text: "Python reads almost like plain English. There are no mandatory semicolons or curly braces to trip you up. This means you spend your energy thinking about problem-solving rather than fighting the language. Companies like Google, Netflix, NASA, and Instagram rely on Python in their core systems, making it one of the most marketable skills you can add to your resume.",
      },
      { type: "h3", text: "Versatility Across Every Industry" },
      {
        type: "p",
        text: "Python is used in web development with Django and Flask, data science with Pandas and NumPy, machine learning with TensorFlow and PyTorch, automation and scripting, game development with Pygame, and even space mission planning at NASA. Mastering Python opens doors across virtually every tech domain.",
      },
      { type: "h2", text: "Your Very First Python Program" },
      {
        type: "p",
        text: "Open the CodeRunner compiler, select Python, and paste the code below. Click Run and you will see your first output appear instantly.",
      },
      {
        type: "code",
        lang: "python",
        text: '# Your very first Python program\nprint("Hello, World!")',
      },
      {
        type: "p",
        text: "The print() function outputs text to the screen. That is it — you just ran your first Python program. Now let us make it interactive.",
      },
      { type: "h3", text: "Accepting User Input" },
      {
        type: "code",
        lang: "python",
        text: 'name = input("What is your name? ")\nprint(f"Hello, {name}! Welcome to Python.")',
      },
      {
        type: "p",
        text: "The input() function pauses and waits for the user to type something. Whatever they type is stored in the variable name. The f-string (formatted string) on the next line inserts that value directly into the printed message.",
      },
      { type: "h2", text: "Variables and Data Types" },
      {
        type: "p",
        text: "A variable is a named container that stores a value. Python is dynamically typed, meaning you never need to declare the type — Python figures it out from the value you assign.",
      },
      {
        type: "code",
        lang: "python",
        text: '# Integers\nage = 25\n\n# Floats\nprice = 19.99\n\n# Strings\nfirst_name = "Alice"\n\n# Booleans\nis_student = True\n\n# Print all variables\nprint(f"{first_name} is {age} years old.")\nprint(f"Enrolled: {is_student}")',
      },
      { type: "h2", text: "Lists: Storing Multiple Values" },
      {
        type: "p",
        text: "A list holds multiple values in a single variable. Lists are ordered, changeable, and allow duplicate values.",
      },
      {
        type: "code",
        lang: "python",
        text: 'fruits = ["apple", "banana", "orange", "grape"]\n\n# Access by index (starts at 0)\nprint(fruits[0])   # apple\nprint(fruits[-1])  # grape  (last item)\n\n# Add an item\nfruits.append("mango")\n\n# Loop through the list\nfor fruit in fruits:\n    print(f"I like {fruit}")',
      },
      { type: "h2", text: "Making Decisions with If Statements" },
      {
        type: "code",
        lang: "python",
        text: 'age = int(input("Enter your age: "))\n\nif age >= 65:\n    print("Senior citizen discount applied.")\nelif age >= 18:\n    print("Full price ticket.")\nelse:\n    print("Child discount applied.")',
      },
      { type: "h2", text: "Repeating Actions with Loops" },
      {
        type: "p",
        text: "Loops let you run the same block of code multiple times without rewriting it. Python has two main loop types: for and while.",
      },
      {
        type: "code",
        lang: "python",
        text: '# For loop: iterate a fixed number of times\nfor i in range(1, 6):\n    print(f"Count: {i}")\n\n# While loop: repeat until a condition is False\nnumber = 10\nwhile number > 0:\n    print(number)\n    number -= 2',
      },
      { type: "h2", text: "Functions: Reusable Blocks of Code" },
      {
        type: "p",
        text: "A function is a named, reusable block of code that performs a specific task. Functions keep your code organised, readable, and easy to debug.",
      },
      {
        type: "code",
        lang: "python",
        text: 'def calculate_area(length, width):\n    """Calculate the area of a rectangle."""\n    return length * width\n\n# Call the function multiple times with different arguments\nprint(calculate_area(10, 5))   # 50\nprint(calculate_area(7, 3))    # 21\nprint(calculate_area(20, 15))  # 300',
      },
      { type: "h2", text: "A Practical Beginner Project: Number Guessing Game" },
      {
        type: "code",
        lang: "python",
        text: 'import random\n\ndef guessing_game():\n    secret = random.randint(1, 100)\n    attempts = 0\n    print("I am thinking of a number between 1 and 100.")\n\n    while True:\n        guess = int(input("Your guess: "))\n        attempts += 1\n\n        if guess < secret:\n            print("Too low! Try higher.")\n        elif guess > secret:\n            print("Too high! Try lower.")\n        else:\n            print(f"Correct! You got it in {attempts} attempts.")\n            break\n\nguessing_game()',
      },
      { type: "h2", text: "Common Beginner Mistakes to Avoid" },
      {
        type: "p",
        text: "The most common Python mistake is incorrect indentation. Python uses indentation to define code blocks — always use exactly 4 spaces per level and never mix tabs with spaces. A second frequent mistake is calling input() without converting its result: input() always returns a string, so wrap it with int() or float() when you need a number.",
      },
      { type: "h2", text: "Conclusion" },
      {
        type: "p",
        text: "You have now learned the core building blocks of Python: variables, data types, lists, conditionals, loops, and functions. The most important next step is daily practice. Open the CodeRunner Python compiler each day, build something small, make mistakes, fix them, and keep pushing forward. Every Python expert started exactly where you are right now.",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // POST 3
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: 3,
    title: "C++ vs C: Which Programming Language Should You Learn First?",
    slug: "cpp-vs-c-which-language-to-learn",
    metaTitle: "C++ vs C: Which Language Should Beginners Learn First? 2026",
    metaDescription:
      "Confused between C and C++? Discover the key differences, pros and cons, and which language is better for your goals in 2026.",
    author: "CodeRunner Team",
    date: "2026-01-26",
    readTime: "9 min read",
    category: "Programming",
    tags: ["C", "C++", "comparison", "beginners"],
    featuredImage: "/blog/c-vs-cpp.jpg",
    excerpt:
      "Choosing between C and C++ confuses many beginners. This in-depth comparison will help you pick the right language for your goals.",
    content: [
      {
        type: "h1",
        text: "C++ vs C: Which Programming Language Should You Learn First?",
      },
      {
        type: "p",
        text: "Both C and C++ are foundational languages that have shaped the entire software industry. Operating systems, game engines, databases, and browsers are all built with them. If you are starting out and wondering which one to learn first, this guide breaks down every important difference so you can make a confident, informed decision.",
      },
      { type: "h2", text: "A Brief History" },
      {
        type: "p",
        text: "C was created in 1972 by Dennis Ritchie at Bell Labs and became the foundation of the Unix operating system. C++ was developed by Bjarne Stroustrup starting in 1979 as an extension of C, adding object-oriented features. Because C++ was designed as a superset of C, almost every valid C program is also a valid C++ program.",
      },
      { type: "h2", text: "Key Differences at a Glance" },
      {
        type: "p",
        text: "C is a procedural language. You organise code into functions that operate on data. C++ is multi-paradigm: it supports procedural programming, object-oriented programming via classes and inheritance, and generic programming via templates. C has no operator overloading, no function overloading, no templates, and no exceptions. C++ has all of these, plus the powerful Standard Template Library (STL).",
      },
      { type: "h3", text: "Hello World in C" },
      {
        type: "code",
        lang: "c",
        text: '#include <stdio.h>\n\nint main() {\n    printf("Hello, World!\\n");\n    return 0;\n}',
      },
      { type: "h3", text: "Hello World in C++" },
      {
        type: "code",
        lang: "cpp",
        text: '#include <iostream>\n\nint main() {\n    std::cout << "Hello, World!" << std::endl;\n    return 0;\n}',
      },
      { type: "h2", text: "When to Choose C" },
      {
        type: "p",
        text: "Choose C if your goal is operating systems or embedded systems development, you want to deeply understand how memory and hardware work, you are targeting resource-constrained environments like microcontrollers, or you need the absolute fastest and smallest possible binary. C is used in the Linux kernel, Windows internals, device drivers, IoT firmware, and the cores of MySQL and PostgreSQL.",
      },
      { type: "h3", text: "Memory Management in C" },
      {
        type: "code",
        lang: "c",
        text: '#include <stdio.h>\n#include <stdlib.h>\n\nint main() {\n    // Allocate memory for 5 integers\n    int *arr = (int *)malloc(5 * sizeof(int));\n\n    for (int i = 0; i < 5; i++) {\n        arr[i] = (i + 1) * 10;\n    }\n\n    for (int i = 0; i < 5; i++) {\n        printf("%d ", arr[i]);\n    }\n\n    free(arr); // Always free manually in C\n    return 0;\n}',
      },
      { type: "h2", text: "When to Choose C++" },
      {
        type: "p",
        text: "Choose C++ if you want to build game engines, graphics applications, or real-time systems. It is also the right choice if you plan to work in finance on high-frequency trading platforms, in desktop software like Microsoft Office or Adobe Photoshop, or in web browsers like Chrome and Firefox. C++ gives you the performance of C with the abstraction power of modern languages.",
      },
      { type: "h3", text: "Object-Oriented Code in C++" },
      {
        type: "code",
        lang: "cpp",
        text: '#include <iostream>\n#include <string>\n\nclass Car {\nprivate:\n    std::string brand;\n    int speed;\n\npublic:\n    Car(std::string b) : brand(b), speed(0) {}\n\n    void accelerate(int amount) {\n        speed += amount;\n        std::cout << brand << " is now going " << speed << " mph\\n";\n    }\n\n    void brake() {\n        speed = std::max(0, speed - 10);\n        std::cout << brand << " slowed to " << speed << " mph\\n";\n    }\n};\n\nint main() {\n    Car tesla("Tesla");\n    tesla.accelerate(30);\n    tesla.accelerate(20);\n    tesla.brake();\n    return 0;\n}',
      },
      { type: "h2", text: "The STL: C++'s Superpower" },
      {
        type: "p",
        text: "The Standard Template Library gives C++ developers ready-made, highly optimised data structures and algorithms. You get vectors (dynamic arrays), maps (hash tables), sets, queues, sorting algorithms, and much more — all with a clean, consistent interface.",
      },
      {
        type: "code",
        lang: "cpp",
        text: '#include <iostream>\n#include <vector>\n#include <algorithm>\n\nint main() {\n    std::vector<int> scores = {85, 42, 97, 61, 78};\n\n    // Sort in ascending order\n    std::sort(scores.begin(), scores.end());\n\n    // Print sorted scores\n    for (int s : scores) {\n        std::cout << s << " ";\n    }\n    // Output: 42 61 78 85 97\n    return 0;\n}',
      },
      { type: "h2", text: "Can You Learn Both?" },
      {
        type: "p",
        text: "Absolutely — and many professional developers do. A recommended path is to spend your first two to three months on C to build a solid understanding of pointers, memory allocation, and low-level thinking. Then transition to C++, where you add classes, templates, and the STL on top of that foundation. Because C++ includes C, everything you learned in C still applies.",
      },
      { type: "h2", text: "Conclusion" },
      {
        type: "p",
        text: "C is the minimalist's choice — lean, fast, and illuminating. C++ is the pragmatist's choice — powerful, expressive, and industry-dominant. Neither is wrong. The best language to learn first is the one most aligned with your goals. Open the CodeRunner compiler right now, paste one of the examples above, and start exploring. Hands-on experience will teach you more than any comparison article.",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // POST 4
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: 4,
    title: "Java Basics: Write Your First Java Program in 10 Minutes",
    slug: "java-basics-first-program-tutorial",
    metaTitle: "Java Tutorial for Beginners: Write Your First Java Program 2026",
    metaDescription:
      "Learn Java programming basics and write your first Java program in minutes. Complete beginner's tutorial with code examples, variables, loops, and methods.",
    author: "CodeRunner Team",
    date: "2026-01-25",
    readTime: "8 min read",
    category: "Java",
    tags: ["java", "beginners", "tutorial", "programming"],
    featuredImage: "/blog/java-basics.jpg",
    excerpt:
      "Java powers billions of devices worldwide. Learn the basics and write your first working Java program in just 10 minutes.",
    content: [
      {
        type: "h1",
        text: "Java Basics: Write Your First Java Program in 10 Minutes",
      },
      {
        type: "p",
        text: "Java is one of the most widely used programming languages in history. It powers Android smartphones, banking systems, airline booking platforms, enterprise software, and big data tools. Its Write Once, Run Anywhere philosophy means code compiled on Windows runs identically on Mac, Linux, and every other platform with a Java Virtual Machine (JVM). Let us get you writing real Java code in the next ten minutes.",
      },
      { type: "h2", text: "Your First Java Program" },
      {
        type: "p",
        text: "Open the CodeRunner compiler, select Java, and type this classic program.",
      },
      {
        type: "code",
        lang: "java",
        text: 'public class Main {\n    public static void main(String[] args) {\n        System.out.println("Hello, World!");\n    }\n}',
      },
      { type: "h3", text: "Breaking Down the Code" },
      {
        type: "p",
        text: "Every Java program is wrapped inside a class. The class name must match the filename — here both are Main. The main method is the entry point: Java always starts execution here. System.out.println() prints text followed by a newline. These three concepts appear in every Java program you will ever write.",
      },
      { type: "h2", text: "Variables and Data Types" },
      {
        type: "p",
        text: "Java is statically typed, which means you must declare the type of every variable before using it. This strictness catches many bugs at compile time rather than at runtime.",
      },
      {
        type: "code",
        lang: "java",
        text: 'public class Variables {\n    public static void main(String[] args) {\n        int age = 25;              // whole number\n        double price = 19.99;      // decimal number\n        String name = "Alice";     // text\n        boolean isStudent = true;  // true or false\n        char grade = \'A\';          // single character\n\n        System.out.println(name + " is " + age + " years old.");\n        System.out.println("Enrolled: " + isStudent);\n        System.out.println("Grade: " + grade);\n    }\n}',
      },
      { type: "h2", text: "Reading User Input" },
      {
        type: "p",
        text: "The Scanner class lets your program read input from the user. Add it with an import statement at the top.",
      },
      {
        type: "code",
        lang: "java",
        text: 'import java.util.Scanner;\n\npublic class UserInput {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n\n        System.out.print("Enter your name: ");\n        String name = scanner.nextLine();\n\n        System.out.print("Enter your age: ");\n        int age = scanner.nextInt();\n\n        System.out.println("Hello, " + name + "! You are " + age + " years old.");\n        scanner.close();\n    }\n}',
      },
      { type: "h2", text: "If-Else Statements" },
      {
        type: "code",
        lang: "java",
        text: 'public class GradeChecker {\n    public static void main(String[] args) {\n        int score = 82;\n\n        if (score >= 90) {\n            System.out.println("Grade: A - Excellent!");\n        } else if (score >= 80) {\n            System.out.println("Grade: B - Good job!");\n        } else if (score >= 70) {\n            System.out.println("Grade: C - Fair");\n        } else if (score >= 60) {\n            System.out.println("Grade: D - Needs improvement");\n        } else {\n            System.out.println("Grade: F - Failed");\n        }\n    }\n}',
      },
      { type: "h2", text: "Loops in Java" },
      {
        type: "code",
        lang: "java",
        text: 'public class Loops {\n    public static void main(String[] args) {\n        // For loop\n        System.out.println("For loop:");\n        for (int i = 1; i <= 5; i++) {\n            System.out.println("Count: " + i);\n        }\n\n        // While loop\n        System.out.println("\\nWhile loop:");\n        int n = 10;\n        while (n > 0) {\n            System.out.print(n + " ");\n            n -= 2;\n        }\n    }\n}',
      },
      { type: "h2", text: "Methods: Organising Your Code" },
      {
        type: "p",
        text: "Methods are reusable named blocks of code. They keep your programs clean, reduce repetition, and make debugging much easier.",
      },
      {
        type: "code",
        lang: "java",
        text: 'public class Calculator {\n\n    public static int add(int a, int b) {\n        return a + b;\n    }\n\n    public static int multiply(int a, int b) {\n        return a * b;\n    }\n\n    public static boolean isEven(int n) {\n        return n % 2 == 0;\n    }\n\n    public static void main(String[] args) {\n        System.out.println("3 + 7 = " + add(3, 7));\n        System.out.println("4 x 5 = " + multiply(4, 5));\n        System.out.println("Is 8 even? " + isEven(8));\n        System.out.println("Is 9 even? " + isEven(9));\n    }\n}',
      },
      { type: "h2", text: "Arrays in Java" },
      {
        type: "code",
        lang: "java",
        text: 'public class ArrayDemo {\n    public static void main(String[] args) {\n        int[] scores = {95, 87, 76, 92, 88};\n\n        // Access elements\n        System.out.println("First score: " + scores[0]);\n        System.out.println("Last score:  " + scores[scores.length - 1]);\n\n        // Calculate average using enhanced for loop\n        int total = 0;\n        for (int score : scores) {\n            total += score;\n        }\n        double average = (double) total / scores.length;\n        System.out.printf("Average: %.2f%n", average);\n    }\n}',
      },
      { type: "h2", text: "Common Beginner Mistakes" },
      {
        type: "p",
        text: "Every statement in Java must end with a semicolon. Java is case-sensitive: String is not the same as string. Always close Scanner objects to prevent resource leaks. The class name must exactly match the filename including capitalisation.",
      },
      { type: "h2", text: "Conclusion" },
      {
        type: "p",
        text: "In ten minutes you have learned the Java fundamentals that underpin every program from a simple console app to a large enterprise system. Keep practising daily in the CodeRunner Java compiler. Run the examples, modify them, break them intentionally, fix them, and learn from every error. That cycle is how every professional Java developer was built.",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // POST 5
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: 5,
    title: "JavaScript Fundamentals: From Zero to Hero",
    slug: "javascript-fundamentals-complete-guide",
    metaTitle: "JavaScript Tutorial: Complete Fundamentals Guide for Beginners 2026",
    metaDescription:
      "Master JavaScript fundamentals from scratch. Learn variables, functions, arrays, objects, and modern ES6+ features with practical code examples.",
    author: "CodeRunner Team",
    date: "2026-01-24",
    readTime: "12 min read",
    category: "JavaScript",
    tags: ["javascript", "web development", "beginners", "ES6"],
    featuredImage: "/blog/javascript-fundamentals.jpg",
    excerpt:
      "JavaScript powers the modern web. Learn everything from the basics to modern ES6+ features and start building interactive projects today.",
    content: [
      { type: "h1", text: "JavaScript Fundamentals: From Zero to Hero" },
      {
        type: "p",
        text: "JavaScript is the only programming language that runs natively in every web browser on the planet. It powers the interactive features on every website you visit, the apps on your phone built with React Native, the servers running on Node.js, and the desktop apps built with Electron — including VS Code, Slack, and Discord. If you learn one language that opens the most doors, JavaScript is it.",
      },
      { type: "h2", text: "Your First JavaScript Program" },
      {
        type: "p",
        text: "Open the CodeRunner compiler, select JavaScript, and run this one-liner.",
      },
      {
        type: "code",
        lang: "javascript",
        text: 'console.log("Hello, JavaScript World!");',
      },
      {
        type: "p",
        text: "console.log() is your most important debugging tool. It prints any value to the output panel and should become second nature as you write more JavaScript.",
      },
      { type: "h2", text: "Variables: let, const, and var" },
      {
        type: "p",
        text: "Modern JavaScript uses let for values that will change and const for values that will not. Avoid var — it has confusing scoping rules inherited from the early days of the language.",
      },
      {
        type: "code",
        lang: "javascript",
        text: "const PI = 3.14159;           // Cannot be reassigned\nlet score = 0;               // Can be changed later\nscore = 100;\n\nconsole.log(PI);    // 3.14159\nconsole.log(score); // 100",
      },
      { type: "h2", text: "Data Types" },
      {
        type: "code",
        lang: "javascript",
        text: 'let age = 25;                        // Number\nlet name = "Alice";                 // String\nlet isLoggedIn = true;              // Boolean\nlet fruits = ["apple", "mango"];    // Array\nlet user = { name: "Bob", age: 30 };// Object\nlet nothing = null;                 // Null\nlet notAssigned;                    // Undefined\n\nconsole.log(typeof age);        // "number"\nconsole.log(typeof name);       // "string"\nconsole.log(typeof isLoggedIn); // "boolean"',
      },
      { type: "h2", text: "Template Literals" },
      {
        type: "p",
        text: "Template literals (backtick strings) let you embed variables directly inside strings without messy concatenation.",
      },
      {
        type: "code",
        lang: "javascript",
        text: 'const firstName = "Alice";\nconst age = 25;\nconst message = `Hello, ${firstName}! You are ${age} years old.`;\nconsole.log(message);\n// Hello, Alice! You are 25 years old.',
      },
      { type: "h2", text: "Operators and Comparisons" },
      {
        type: "p",
        text: "Always use strict equality (===) in JavaScript. The loose equality operator (==) performs type coercion, which leads to surprising and hard-to-find bugs.",
      },
      {
        type: "code",
        lang: "javascript",
        text: "// Arithmetic\nconsole.log(10 + 3);   // 13\nconsole.log(10 - 3);   // 7\nconsole.log(10 * 3);   // 30\nconsole.log(10 / 3);   // 3.333...\nconsole.log(10 % 3);   // 1  (remainder)\nconsole.log(2 ** 8);   // 256 (exponentiation)\n\n// Comparison\nconsole.log(5 === '5'); // false (different types)\nconsole.log(5 == '5');  // true  (loose — avoid this)",
      },
      { type: "h2", text: "Control Flow" },
      {
        type: "code",
        lang: "javascript",
        text: 'const score = 85;\n\nif (score >= 90) {\n    console.log("Grade: A");\n} else if (score >= 80) {\n    console.log("Grade: B");\n} else if (score >= 70) {\n    console.log("Grade: C");\n} else {\n    console.log("Grade: F");\n}\n\n// Ternary shorthand\nconst status = score >= 50 ? "Pass" : "Fail";\nconsole.log(status); // Pass',
      },
      { type: "h2", text: "Loops" },
      {
        type: "code",
        lang: "javascript",
        text: "// For loop\nfor (let i = 1; i <= 5; i++) {\n    console.log(`Count: ${i}`);\n}\n\n// For...of loop over an array\nconst languages = [\"Python\", \"Java\", \"JavaScript\", \"C++\"];\nfor (const lang of languages) {\n    console.log(lang);\n}",
      },
      { type: "h2", text: "Functions and Arrow Functions" },
      {
        type: "code",
        lang: "javascript",
        text: "// Traditional function\nfunction add(a, b) {\n    return a + b;\n}\n\n// Arrow function (ES6)\nconst multiply = (a, b) => a * b;\n\n// Default parameters\nconst greet = (name = \"Guest\") => `Welcome, ${name}!`;\n\nconsole.log(add(5, 3));       // 8\nconsole.log(multiply(4, 6));  // 24\nconsole.log(greet());         // Welcome, Guest!\nconsole.log(greet(\"Alice\"));  // Welcome, Alice!",
      },
      { type: "h2", text: "Arrays and Higher-Order Methods" },
      {
        type: "p",
        text: "JavaScript arrays come with powerful built-in methods that make working with collections clean and expressive.",
      },
      {
        type: "code",
        lang: "javascript",
        text: "const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];\n\n// map: transform each element\nconst doubled = numbers.map(n => n * 2);\nconsole.log(doubled); // [2,4,6,8,10,12,14,16,18,20]\n\n// filter: keep matching elements\nconst evens = numbers.filter(n => n % 2 === 0);\nconsole.log(evens); // [2,4,6,8,10]\n\n// reduce: combine into single value\nconst total = numbers.reduce((sum, n) => sum + n, 0);\nconsole.log(total); // 55",
      },
      { type: "h2", text: "Objects and Destructuring" },
      {
        type: "code",
        lang: "javascript",
        text: 'const person = {\n    firstName: "Alice",\n    lastName: "Smith",\n    age: 28,\n    greet() {\n        return `Hi, I am ${this.firstName}!`;\n    }\n};\n\nconsole.log(person.firstName);    // Alice\nconsole.log(person.greet());      // Hi, I am Alice!\n\n// Destructuring\nconst { firstName, age } = person;\nconsole.log(`${firstName} is ${age} years old.`);',
      },
      { type: "h2", text: "Conclusion" },
      {
        type: "p",
        text: "You now have a solid grasp of JavaScript fundamentals: variables, types, operators, control flow, functions, arrays, and objects. These concepts are the foundation of everything from simple scripts to full React applications. Open the CodeRunner JavaScript compiler, experiment with every example in this article, and then start building your own small projects. Consistent daily practice is the fastest path from beginner to confident developer.",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // POST 6
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: 6,
    title: "How Code Execution Works in Your Browser: Behind the Scenes",
    slug: "how-code-execution-works-in-browser",
    metaTitle: "How Code Execution Works in Browser: Full Technical Guide 2026",
    metaDescription:
      "Discover exactly how online compilers execute code in your browser. Learn about sandboxing, container isolation, API calls, and the stack behind web-based coding.",
    author: "CodeRunner Team",
    date: "2026-01-23",
    readTime: "11 min read",
    category: "Technology",
    tags: ["browser", "compilation", "how it works", "technical"],
    featuredImage: "/blog/code-execution-browser.jpg",
    excerpt:
      "Ever wondered how you can run Python or C++ in a web browser with no installs? Explore the fascinating engineering that makes online compilers possible.",
    content: [
      {
        type: "h1",
        text: "How Code Execution Works in Your Browser: Behind the Scenes",
      },
      {
        type: "p",
        text: "You type a few lines of Python, click Run, and within seconds you see output. No installation, no local compiler, no configuration. What is actually happening? A remarkably sophisticated chain of technologies springs into action every time you hit that button. Let us follow the entire journey from keypress to output.",
      },
      { type: "h2", text: "The Core Challenge" },
      {
        type: "p",
        text: "Web browsers are designed to display content and run JavaScript — not to execute Python, Java, or C++. Allowing arbitrary code to run directly in a browser would be a catastrophic security risk. The solution is to execute code on a remote server inside an isolated environment, then stream the results back to the browser. This is exactly what CodeRunner does.",
      },
      { type: "h2", text: "Step 1 — The Editor (Monaco)" },
      {
        type: "p",
        text: "CodeRunner's editor is built on Monaco, the same engine that powers Visual Studio Code. Monaco runs entirely inside your browser and provides syntax highlighting, error squiggles, bracket matching, and auto-completion for every supported language — all before a single request leaves your machine.",
      },
      { type: "h2", text: "Step 2 — Building the API Request" },
      {
        type: "p",
        text: "When you click Run, the React frontend packages your code into a structured JSON payload and sends it over HTTPS to the Piston execution API.",
      },
      {
        type: "code",
        lang: "javascript",
        text: "// What happens internally when you click Run\nconst payload = {\n  language: \"python\",\n  version: \"3.10.0\",\n  files: [\n    { name: \"main.py\", content: 'print(\"Hello!\")' }\n  ],\n  stdin: \"\",\n  compile_timeout: 10000,\n  run_timeout: 3000\n};\n\nconst response = await fetch(\"https://emkc.org/api/v2/piston/execute\", {\n  method: \"POST\",\n  headers: { \"Content-Type\": \"application/json\" },\n  body: JSON.stringify(payload)\n});",
      },
      { type: "h2", text: "Step 3 — The Execution Server" },
      {
        type: "p",
        text: "The Piston API server receives your request and routes it to an execution worker. The worker spins up an isolated container — think of it as a tiny virtual computer that exists only for your code execution. Inside that container: your code has no internet access, it cannot read or write files outside its sandbox, it is limited to a few seconds of CPU time, and it is capped at a specific amount of RAM. When execution finishes (or times out) the container is destroyed.",
      },
      { type: "h2", text: "Compiled vs Interpreted Languages" },
      {
        type: "p",
        text: "For interpreted languages like Python and JavaScript, the server passes your source code directly to the interpreter and captures its output. For compiled languages like C, C++, and Java, a two-step process runs: first the source code is compiled into a binary or bytecode, then that binary is executed. Any compiler errors are captured during the first step and returned to you before execution begins.",
      },
      {
        type: "code",
        lang: "python",
        text: "# This Python snippet demonstrates output capturing\nimport sys\n\nprint(\"This goes to stdout\")            # captured as normal output\nprint(\"This is an error\", file=sys.stderr) # captured as error output\n\n# Both streams are returned to your browser separately",
      },
      { type: "h2", text: "Step 4 — The Response" },
      {
        type: "p",
        text: "The execution server sends back a JSON object containing the standard output (everything your program printed), the standard error (compiler errors or runtime exceptions), the exit code (0 means success, anything else means failure), and metadata about the execution. The React frontend parses this and displays the appropriate output in the console panel.",
      },
      { type: "h2", text: "Why Limitations Exist" },
      {
        type: "p",
        text: "Every restriction you encounter has a direct security or fairness reason. The execution time limit prevents infinite loops from blocking other users. The memory cap prevents one user from consuming all available RAM. Disabling network access prevents code from attacking external servers or leaking data. Disabling file I/O prevents code from reading sensitive files on the host. These are not arbitrary restrictions — they are what make shared code execution safe for everyone.",
      },
      { type: "h2", text: "The Complete Flow Summarised" },
      {
        type: "p",
        text: "User types code in Monaco editor. User clicks Run. React packages code into JSON and POSTs to the Piston API over HTTPS. Piston spins up an isolated container. For compiled languages, compilation runs first. The program executes with stdin piped in. stdout and stderr are captured. The container is destroyed. JSON response travels back to the browser. React displays output in the console panel. Total round-trip time is typically under two seconds.",
      },
      { type: "h2", text: "Conclusion" },
      {
        type: "p",
        text: "What feels like magic — writing code in a browser and seeing it run instantly — is the result of carefully engineered components working in concert: a browser-native editor, secure API design, containerised sandboxes, and fast JSON round-trips. Next time you click Run, you will know exactly what happens in those two seconds. Try it yourself in the CodeRunner compiler and appreciate the engineering behind every execution.",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // POST 7
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: 7,
    title: "Top 10 Programming Mistakes Beginners Make (And How to Fix Them)",
    slug: "top-programming-mistakes-beginners",
    metaTitle: "Top 10 Programming Mistakes Beginners Make and How to Fix Them",
    metaDescription:
      "Avoid the most common programming pitfalls. Learn the top 10 mistakes beginners make in Python, Java, C++, and JavaScript with practical code-based solutions.",
    author: "CodeRunner Team",
    date: "2026-01-22",
    readTime: "10 min read",
    category: "Tips",
    tags: ["beginners", "mistakes", "best practices", "debugging"],
    featuredImage: "/blog/programming-mistakes.jpg",
    excerpt:
      "Every programmer makes mistakes — the key is learning from them. Discover the 10 most common beginner errors and how to fix them permanently.",
    content: [
      {
        type: "h1",
        text: "Top 10 Programming Mistakes Beginners Make (And How to Fix Them)",
      },
      {
        type: "p",
        text: "Every programmer — from absolute beginner to ten-year veteran — makes mistakes. The difference between a struggling learner and a fast-improving one is not the absence of mistakes but the speed at which they recognise, understand, and fix them. Here are the ten most common errors beginners make, with clear explanations and concrete fixes for each.",
      },
      { type: "h2", text: "1. Panicking at Error Messages" },
      {
        type: "p",
        text: "Error messages are not your enemy — they are your most precise debugging tool. They tell you the exact file, the exact line, the type of problem, and often how to fix it. The fix: read the full error before touching a single line of code. Identify the line number. Look at that specific line. Then google the error type if it is unfamiliar.",
      },
      { type: "h2", text: "2. Inconsistent Indentation in Python" },
      {
        type: "code",
        lang: "python",
        text: "# Wrong: mixing indentation levels causes IndentationError\ndef calculate(x, y):\n    result = x + y\n      return result  # Extra spaces break Python\n\n# Correct: always 4 spaces per level\ndef calculate(x, y):\n    result = x + y\n    return result",
      },
      { type: "h2", text: "3. Confusing Assignment (=) with Comparison (==)" },
      {
        type: "code",
        lang: "javascript",
        text: "let age = 18;\n\n// Wrong: = assigns a value — the if condition is always true\nif (age = 21) { console.log(\"Always prints!\"); }\n\n// Correct: === compares value AND type\nif (age === 21) { console.log(\"Correct comparison\"); }\n\n// Always use === instead of == in JavaScript\nconsole.log(5 == \"5\");  // true  (type coercion - dangerous)\nconsole.log(5 === \"5\"); // false (strict - safe)",
      },
      { type: "h2", text: "4. Off-By-One Errors in Loops" },
      {
        type: "code",
        lang: "python",
        text: "# Trying to print numbers 1 through 10\nfor i in range(10):       # Wrong: prints 0-9\n    print(i)\n\nfor i in range(1, 11):    # Correct: prints 1-10\n    print(i)\n\n# Array index out of bounds\narr = [10, 20, 30]\nprint(arr[3])   # Wrong:  IndexError (valid indices: 0, 1, 2)\nprint(arr[2])   # Correct: 30",
      },
      { type: "h2", text: "5. Repeating Code Instead of Using Functions" },
      {
        type: "code",
        lang: "python",
        text: "# Bad: copy-pasted logic is hard to maintain\narea1 = 10 * 5\nprint(f\"Room 1: {area1} sq ft\")\narea2 = 8 * 6\nprint(f\"Room 2: {area2} sq ft\")\n\n# Good: one function, called wherever needed\ndef room_area(length, width):\n    return length * width\n\nprint(f\"Room 1: {room_area(10, 5)} sq ft\")\nprint(f\"Room 2: {room_area(8, 6)} sq ft\")",
      },
      { type: "h2", text: "6. Meaningless Variable Names" },
      {
        type: "code",
        lang: "python",
        text: "# Bad: nobody knows what x, y, z mean\nx = 25\ny = \"Alice\"\nz = True\n\n# Good: names that explain themselves\nstudent_age = 25\nstudent_name = \"Alice\"\nis_enrolled = True\n\nprint(f\"{student_name} is {student_age} and enrolled: {is_enrolled}\")",
      },
      { type: "h2", text: "7. Not Handling Edge Cases" },
      {
        type: "code",
        lang: "python",
        text: "# Fragile: crashes when b is zero\ndef divide(a, b):\n    return a / b\n\n# Robust: handles the edge case gracefully\ndef divide_safe(a, b):\n    if b == 0:\n        return \"Error: division by zero is undefined\"\n    return a / b\n\nprint(divide_safe(10, 2))  # 5.0\nprint(divide_safe(10, 0))  # Error message instead of crash",
      },
      { type: "h2", text: "8. Using Variables Before They Are Defined" },
      {
        type: "code",
        lang: "python",
        text: "# Wrong: using total before it is created\nprint(total)  # NameError: name 'total' is not defined\ntotal = 0\n\n# Correct: always define before use\ntotal = 0\nfor number in [1, 2, 3, 4, 5]:\n    total += number\nprint(total)  # 15",
      },
      { type: "h2", text: "9. Not Testing with Edge-Case Inputs" },
      {
        type: "p",
        text: "Most beginners only test the happy path — normal inputs that work as expected. Professional code must also handle an empty list, a zero value, a negative number, a very large number, and a None or null value. After writing any function, ask yourself: what is the weirdest input this could receive, and does my code handle it gracefully?",
      },
      { type: "h2", text: "10. Giving Up Too Early Instead of Debugging Systematically" },
      {
        type: "p",
        text: "When code does not work, many beginners rewrite everything from scratch. A more effective approach: add print statements before and after every suspicious line to see exactly what value each variable holds at each point. This narrows the problem to a specific location. Once you know where the bug lives, fixing it is usually straightforward. The CodeRunner compiler is perfect for this iterative style of testing.",
      },
      { type: "h2", text: "Conclusion" },
      {
        type: "p",
        text: "Mistakes are the curriculum of programming. Each one teaches you something a tutorial never could. The ten errors above appear in virtually every beginner's code — now you know how to spot them instantly and fix them confidently. Open the CodeRunner compiler, deliberately reproduce each mistake, then apply the fix. That hands-on practice will make these lessons permanent.",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // POST 8
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: 8,
    title: "Algorithms and Big O Notation: A Beginner's Complete Guide",
    slug: "algorithms-big-o-notation-beginners-guide",
    metaTitle: "Algorithms and Big O Notation: Complete Beginner's Guide 2026",
    metaDescription:
      "Master algorithms and Big O notation with this beginner-friendly guide. Learn searching, sorting, and how to measure code efficiency with real examples.",
    author: "CodeRunner Team",
    date: "2026-01-21",
    readTime: "9 min read",
    category: "Algorithms",
    tags: ["algorithms", "big o notation", "problem solving", "efficiency"],
    featuredImage: "/blog/algorithms-guide.jpg",
    excerpt:
      "Algorithms are the heart of efficient software. Learn how to measure and improve your code's performance using Big O notation.",
    content: [
      {
        type: "h1",
        text: "Algorithms and Big O Notation: A Beginner's Complete Guide",
      },
      {
        type: "p",
        text: "Every program you write is powered by algorithms. Sorting a list, finding a name in a database, recommending a video — these are all algorithm problems. Learning to measure and compare algorithm efficiency is one of the highest-value skills in software development. This guide explains Big O notation from scratch with practical code examples you can run right now.",
      },
      { type: "h2", text: "What Is an Algorithm?" },
      {
        type: "p",
        text: "An algorithm is a finite, ordered sequence of well-defined instructions that solves a specific problem. A recipe is an algorithm. The steps your GPS follows to find the fastest route are an algorithm. Sorting your email inbox is an algorithm. In programming, algorithms are the logic that transforms input data into output results.",
      },
      { type: "h2", text: "Why Efficiency Matters" },
      {
        type: "p",
        text: "Imagine you have a list of one million user names and need to find one. A naive algorithm might check every single name in order — on average 500,000 comparisons. A smarter algorithm can find any name in fewer than 20 comparisons. For small lists the difference is irrelevant. For real applications processing millions of records, it can mean the difference between a system that responds in milliseconds and one that is unusably slow.",
      },
      { type: "h2", text: "Big O Notation Explained" },
      {
        type: "p",
        text: "Big O notation describes how an algorithm's runtime grows relative to the size of its input (called n). It focuses on the dominant term and ignores constants and lower-order terms, because those become irrelevant as n grows large.",
      },
      { type: "h3", text: "O(1) — Constant Time" },
      {
        type: "p",
        text: "The runtime is the same regardless of how large the input is. Accessing an element in an array by its index is always one operation whether the array has ten or ten million elements.",
      },
      {
        type: "code",
        lang: "python",
        text: "def get_first_element(arr):\n    return arr[0]  # Always one operation — O(1)\n\nsmall = [1, 2, 3]\nhuge  = list(range(1_000_000))\n\nprint(get_first_element(small))  # instant\nprint(get_first_element(huge))   # equally instant",
      },
      { type: "h3", text: "O(n) — Linear Time" },
      {
        type: "p",
        text: "Runtime grows proportionally with input size. If you double the input, you roughly double the time. Finding the maximum value in an unsorted list requires checking every element.",
      },
      {
        type: "code",
        lang: "python",
        text: "def find_max(arr):           # O(n)\n    maximum = arr[0]\n    for value in arr:        # visits every element once\n        if value > maximum:\n            maximum = value\n    return maximum\n\nprint(find_max([3, 1, 9, 2, 7, 5]))  # 9",
      },
      { type: "h3", text: "O(log n) — Logarithmic Time" },
      {
        type: "p",
        text: "Runtime grows very slowly even as input grows enormously. Binary search achieves this by halving the search space with every comparison.",
      },
      {
        type: "code",
        lang: "python",
        text: "def binary_search(sorted_arr, target):  # O(log n)\n    left, right = 0, len(sorted_arr) - 1\n    while left <= right:\n        mid = (left + right) // 2\n        if sorted_arr[mid] == target:\n            return mid\n        elif sorted_arr[mid] < target:\n            left = mid + 1\n        else:\n            right = mid - 1\n    return -1  # not found\n\ndata = list(range(0, 1000, 2))  # [0, 2, 4, ..., 998]\nprint(binary_search(data, 642)) # finds index in ~10 steps",
      },
      { type: "h3", text: "O(n squared) — Quadratic Time" },
      {
        type: "p",
        text: "Runtime grows as the square of the input. A list of 100 elements requires 10,000 operations; 1,000 elements require 1,000,000. Nested loops over the same data are the telltale sign.",
      },
      {
        type: "code",
        lang: "python",
        text: "def bubble_sort(arr):               # O(n^2)\n    n = len(arr)\n    for i in range(n):               # outer loop: O(n)\n        for j in range(n - 1 - i):   # inner loop: O(n)\n            if arr[j] > arr[j + 1]:\n                arr[j], arr[j + 1] = arr[j + 1], arr[j]\n    return arr\n\nprint(bubble_sort([64, 34, 25, 12, 22, 11, 90]))",
      },
      { type: "h2", text: "Practical Sorting: Python's Built-In Sort" },
      {
        type: "p",
        text: "Python's sorted() and list.sort() use Timsort, an O(n log n) algorithm. For almost all real work you should use the built-in rather than implementing sorting yourself.",
      },
      {
        type: "code",
        lang: "python",
        text: "numbers = [5, 2, 8, 1, 9, 3]\n\n# Ascending\nprint(sorted(numbers))             # [1, 2, 3, 5, 8, 9]\n\n# Descending\nprint(sorted(numbers, reverse=True)) # [9, 8, 5, 3, 2, 1]\n\n# Sort strings by length\nwords = [\"banana\", \"fig\", \"apple\", \"kiwi\"]\nprint(sorted(words, key=len))      # ['fig', 'kiwi', 'apple', 'banana']",
      },
      { type: "h2", text: "Choosing the Right Algorithm" },
      {
        type: "p",
        text: "For a list with fewer than a few thousand elements, almost any algorithm is fast enough. For large datasets, prefer O(n log n) or O(log n) algorithms. For dictionary lookups, Python's dict gives O(1) average access. When solving a problem, first write a working solution, then measure whether performance is acceptable before optimising.",
      },
      { type: "h2", text: "Conclusion" },
      {
        type: "p",
        text: "Big O notation gives you a vocabulary for talking about code efficiency. O(1) is ideal. O(log n) is excellent. O(n) is good. O(n log n) is acceptable for sorting. O(n squared) should be avoided for large inputs. Practice the examples in this article using the CodeRunner compiler, experiment with different input sizes, and develop an intuition for how each algorithm behaves as data grows.",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // POST 9
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: 9,
    title: "Object-Oriented Programming Explained with Real-World Examples",
    slug: "object-oriented-programming-explained",
    metaTitle: "OOP Explained: Object-Oriented Programming Guide with Examples 2026",
    metaDescription:
      "Learn Object-Oriented Programming with real-world analogies. Master classes, objects, inheritance, encapsulation, and polymorphism in Python and Java.",
    author: "CodeRunner Team",
    date: "2026-01-20",
    readTime: "11 min read",
    category: "Concepts",
    tags: ["OOP", "classes", "objects", "java", "python"],
    featuredImage: "/blog/oop-explained.jpg",
    excerpt:
      "OOP is fundamental to modern software development. Master the four core pillars with practical real-world examples in Python and Java.",
    content: [
      {
        type: "h1",
        text: "Object-Oriented Programming Explained with Real-World Examples",
      },
      {
        type: "p",
        text: "Object-Oriented Programming (OOP) is a way of designing software by modelling it around objects — self-contained units that combine data (attributes) and behaviour (methods). It mirrors how we naturally think about the world and is the foundation of Java, Python, C++, C#, and virtually every other mainstream language. Mastering OOP is a pivotal milestone in every developer's journey.",
      },
      { type: "h2", text: "The Four Pillars of OOP" },
      {
        type: "p",
        text: "OOP is built on four core principles. Encapsulation means bundling data and the methods that operate on it into a single unit and hiding internal details from the outside world. Abstraction means exposing only the necessary interface and hiding complexity. Inheritance means a child class can acquire the properties and methods of a parent class, enabling code reuse. Polymorphism means the same method name can behave differently depending on which object calls it.",
      },
      { type: "h2", text: "Classes and Objects: The Blueprint Analogy" },
      {
        type: "p",
        text: "A class is a blueprint. An object is a specific thing created from that blueprint. An architect's plan for a house is the class. Every actual house built from that plan is an object. Multiple objects can be created from the same class, each with its own independent data.",
      },
      {
        type: "code",
        lang: "python",
        text: "class Dog:\n    def __init__(self, name, breed, age):\n        self.name  = name\n        self.breed = breed\n        self.age   = age\n\n    def bark(self):\n        return f\"{self.name} says: Woof!\"\n\n    def describe(self):\n        return f\"{self.name} is a {self.breed}, {self.age} years old\"\n\n# Create two independent Dog objects from the same blueprint\nrex   = Dog(\"Rex\",   \"German Shepherd\", 3)\nbella = Dog(\"Bella\", \"Labrador\",        5)\n\nprint(rex.bark())       # Rex says: Woof!\nprint(bella.describe()) # Bella is a Labrador, 5 years old",
      },
      { type: "h2", text: "Encapsulation: Protecting Your Data" },
      {
        type: "p",
        text: "Encapsulation prevents outside code from directly modifying an object's internal state. Instead, data is only accessible through controlled methods (getters and setters). This guards against bugs caused by invalid data entering your object.",
      },
      {
        type: "code",
        lang: "python",
        text: "class BankAccount:\n    def __init__(self, owner, initial_balance):\n        self.owner    = owner\n        self.__balance = initial_balance  # private attribute\n\n    def deposit(self, amount):\n        if amount > 0:\n            self.__balance += amount\n            return f\"Deposited ${amount:.2f}. Balance: ${self.__balance:.2f}\"\n        return \"Deposit amount must be positive.\"\n\n    def withdraw(self, amount):\n        if 0 < amount <= self.__balance:\n            self.__balance -= amount\n            return f\"Withdrew ${amount:.2f}. Remaining: ${self.__balance:.2f}\"\n        return \"Insufficient funds or invalid amount.\"\n\n    def get_balance(self):\n        return self.__balance\n\naccount = BankAccount(\"Alice\", 1000)\nprint(account.deposit(500))\nprint(account.withdraw(200))\nprint(f\"Final balance: ${account.get_balance():.2f}\")",
      },
      { type: "h2", text: "Inheritance: Reusing Code" },
      {
        type: "p",
        text: "Inheritance lets you create a new class that extends an existing one, inheriting all its attributes and methods while adding or overriding behaviour. This removes duplication and models real-world is-a relationships: a Dog is an Animal; a Truck is a Vehicle.",
      },
      {
        type: "code",
        lang: "python",
        text: "class Animal:\n    def __init__(self, name):\n        self.name = name\n\n    def speak(self):\n        return f\"{self.name} makes a sound.\"\n\nclass Dog(Animal):               # Dog inherits from Animal\n    def speak(self):             # override parent method\n        return f\"{self.name} says: Woof!\"\n\n    def fetch(self, item):\n        return f\"{self.name} fetches the {item}!\"\n\nclass Cat(Animal):               # Cat also inherits from Animal\n    def speak(self):\n        return f\"{self.name} says: Meow!\"\n\n    def purr(self):\n        return f\"{self.name} purrs contentedly.\"\n\ndog = Dog(\"Rex\")\ncat = Cat(\"Whiskers\")\n\nprint(dog.speak())       # Rex says: Woof!\nprint(dog.fetch(\"ball\")) # Rex fetches the ball!\nprint(cat.speak())       # Whiskers says: Meow!\nprint(cat.purr())",
      },
      { type: "h2", text: "Polymorphism: Same Method, Different Behaviour" },
      {
        type: "code",
        lang: "python",
        text: "class Shape:\n    def area(self):\n        return 0\n\nclass Circle(Shape):\n    def __init__(self, radius):\n        self.radius = radius\n    def area(self):\n        return 3.14159 * self.radius ** 2\n\nclass Rectangle(Shape):\n    def __init__(self, width, height):\n        self.width  = width\n        self.height = height\n    def area(self):\n        return self.width * self.height\n\nclass Triangle(Shape):\n    def __init__(self, base, height):\n        self.base   = base\n        self.height = height\n    def area(self):\n        return 0.5 * self.base * self.height\n\n# Polymorphism in action\nshapes = [Circle(5), Rectangle(4, 6), Triangle(8, 3)]\nfor shape in shapes:\n    print(f\"{shape.__class__.__name__}: area = {shape.area():.2f}\")",
      },
      { type: "h2", text: "OOP in Java" },
      {
        type: "code",
        lang: "java",
        text: "public class Vehicle {\n    protected String brand;\n    protected int speed;\n\n    public Vehicle(String brand) {\n        this.brand = brand;\n        this.speed = 0;\n    }\n\n    public void accelerate(int amount) {\n        speed += amount;\n        System.out.println(brand + \" speed: \" + speed + \" mph\");\n    }\n}\n\npublic class ElectricCar extends Vehicle {\n    private int batteryLevel;\n\n    public ElectricCar(String brand, int battery) {\n        super(brand);\n        this.batteryLevel = battery;\n    }\n\n    public void charge() {\n        batteryLevel = 100;\n        System.out.println(brand + \" fully charged!\");\n    }\n\n    public static void main(String[] args) {\n        ElectricCar car = new ElectricCar(\"Tesla\", 80);\n        car.accelerate(60);\n        car.charge();\n    }\n}",
      },
      { type: "h2", text: "Conclusion" },
      {
        type: "p",
        text: "OOP transforms chaotic code into organised, maintainable systems. Encapsulation protects data integrity. Abstraction manages complexity. Inheritance eliminates repetition. Polymorphism enables flexibility. These are not just academic concepts — they are the design principles behind every large codebase you will ever work on. Practice the examples above in the CodeRunner compiler and start modelling your next project as a collection of well-defined objects.",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // POST 10
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: 10,
    title: "Debugging Like a Pro: Systematic Techniques Every Developer Needs",
    slug: "debugging-code-like-a-pro",
    metaTitle: "Debugging Techniques: Fix Bugs Like a Pro Developer 2026",
    metaDescription:
      "Master professional debugging techniques. Learn systematic approaches to find and fix bugs faster in Python, JavaScript, Java, and C++ with real examples.",
    author: "CodeRunner Team",
    date: "2026-01-19",
    readTime: "9 min read",
    category: "Tips",
    tags: ["debugging", "best practices", "problem solving", "errors"],
    featuredImage: "/blog/debugging-guide.jpg",
    excerpt:
      "Debugging is a core developer skill. Master systematic, professional techniques to find and squash bugs faster in any language.",
    content: [
      {
        type: "h1",
        text: "Debugging Like a Pro: Systematic Techniques Every Developer Needs",
      },
      {
        type: "p",
        text: "Studies consistently show that developers spend between 35 and 50 percent of their working time debugging rather than writing new code. Learning to debug efficiently is therefore not a luxury — it is one of the highest-return skills you can develop. This guide walks you through professional, systematic techniques that the best developers use every day.",
      },
      { type: "h2", text: "Understanding Bug Categories" },
      {
        type: "p",
        text: "Bugs fall into three categories. Syntax errors are caught by the compiler or interpreter before your program even runs — they are usually the easiest to fix. Runtime errors crash a running program, often due to invalid operations like dividing by zero or accessing a null value. Logic errors are the trickiest: the program runs without crashing but produces the wrong output because the logic is flawed.",
      },
      { type: "h2", text: "Technique 1: Read the Full Error Message" },
      {
        type: "p",
        text: "Most beginners glance at an error and start randomly changing code. Professionals read every word. Error messages contain the file name, the line number, the type of exception, and a description. These four pieces of information tell you exactly where to look and what went wrong.",
      },
      {
        type: "code",
        lang: "python",
        text: "def calculate_discount(price, discount_percent):\n    # RuntimeError: if discount_percent is 0, this is fine\n    # but what if price is a string? TypeError will appear\n    discount_amount = price * (discount_percent / 100)\n    return price - discount_amount\n\n# This works\nprint(calculate_discount(100, 20))   # 80.0\n\n# This crashes with a clear TypeError message\n# print(calculate_discount(\"100\", 20))",
      },
      { type: "h2", text: "Technique 2: Strategic Print Debugging" },
      {
        type: "p",
        text: "Add print statements at the entry and exit of every suspicious function to verify that input values are what you expect and that output values are correct. Remove them once the bug is fixed.",
      },
      {
        type: "code",
        lang: "python",
        text: "def process_order(items, discount):\n    print(f\"DEBUG: items={items}, discount={discount}\")  # entry check\n    subtotal = sum(items)\n    print(f\"DEBUG: subtotal={subtotal}\")                 # intermediate check\n    total = subtotal * (1 - discount / 100)\n    print(f\"DEBUG: total={total}\")                       # exit check\n    return total\n\nresult = process_order([29.99, 15.50, 8.75], 10)\nprint(f\"Order total: ${result:.2f}\")",
      },
      { type: "h2", text: "Technique 3: Divide and Conquer" },
      {
        type: "p",
        text: "When a complex function produces wrong output, isolate the"
      },
    ]
   }
];
export default blogPosts;