const express = require('express');
const User = require('../Models/user.model');
const router = express.Router();
const bcrypt = require('bcrypt');

// Assuming you have bodyParser middleware or express.json() middleware enabled
router.use(express.json());

const data = {
  "programming_languages": [
    {
      "name": "C",
      "description": "C is a general-purpose programming language developed at Bell Labs in 1972. It is known for its low-level memory manipulation and is widely used for system programming and embedded systems.",
      "year_created": 1972,
      "paradigm": "Procedural",
      "example_code": "int main() {\n    printf(\"Hello, World!\");\n    return 0;\n}",
      "website": "https://en.wikipedia.org/wiki/C_(programming_language)"
    },
    {
      "name": "C++",
      "description": "C++ is an extension of the C programming language. It adds object-oriented programming features and is widely used for developing software applications, games, and system software.",
      "year_created": 1983,
      "paradigm": "Multi-paradigm (Procedural, Object-Oriented, Generic)",
      "example_code": "#include <iostream>\n\nint main() {\n    std::cout << \"Hello, World!\";\n    return 0;\n}",
      "website": "https://en.wikipedia.org/wiki/C%2B%2B"
    },
    {
      "name": "Python",
      "description": "Python is a high-level, interpreted programming language known for its simplicity and readability. It is used in web development, data analysis, artificial intelligence, and more.",
      "year_created": 1991,
      "paradigm": "Multi-paradigm (Object-Oriented, Procedural, Functional)",
      "example_code": "print('Hello, World!')",
      "website": "https://www.python.org/"
    },
    {
      "name": "java",
      "description": "Java is a popular, platform-independent programming language. It is used for building cross-platform applications, web services, and Android mobile apps.",
      "year_created": 1995,
      "paradigm": "Object-Oriented",
      "example_code": "public class HelloWorld {\n    public static void main(String[] args) {\n        System.out.println(\"Hello, World!\");\n    }\n}",
      "website": "https://www.java.com/"
    },
    {
      "name": "JavaScript",
      "description": "JavaScript is a versatile, high-level scripting language used for web development. It enables interactive web pages and is supported by all major web browsers.",
      "year_created": 1995,
      "paradigm": "Multi-paradigm (Event-Driven, Functional, Object-Oriented)",
      "example_code": "console.log('Hello, World!');",
      "website": "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
    },
    {
      "name": "Ruby",
      "description": "Ruby is an elegant, dynamic, and object-oriented programming language. It is known for its simplicity and is used in web development, particularly with the Ruby on Rails framework.",
      "year_created": 1995,
      "paradigm": "Object-Oriented",
      "example_code": "puts 'Hello, World!'",
      "website": "https://www.ruby-lang.org/"
    },
    {
      "name": "Go",
      "description": "Go, also known as Golang, is a statically typed and compiled language. It is designed for efficiency and is used for system programming and web development.",
      "year_created": 2009,
      "paradigm": "Concurrent, Imperative",
      "example_code": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    fmt.Println(\"Hello, World!\")\n}",
      "website": "https://golang.org/"
    },
    {
      "name": "Rust",
      "description": "Rust is a systems programming language that emphasizes safety and performance. It is used for building reliable and efficient software.",
      "year_created": 2010,
      "paradigm": "Multi-paradigm (Imperative, Functional)",
      "example_code": "fn main() {\n    println!(\"Hello, World!\");\n}",
      "website": "https://www.rust-lang.org/"
    },
    {
      "name": "Swift",
      "description": "Swift is a programming language developed by Apple for iOS, macOS, watchOS, and tvOS app development. It is designed for safety and performance.",
      "year_created": 2014,
      "paradigm": "Multi-paradigm (Protocol-Oriented, Object-Oriented)",
      "example_code": "import UIKit\n\nlet message = \"Hello, World!\"\n\nprint(message)",
      "website": "https://developer.apple.com/swift/"
    },
    {
      "name": "Kotlin",
      "description": "Kotlin is a statically typed programming language that is fully interoperable with Java. It is used for Android app development and other application types.",
      "year_created": 2011,
      "paradigm": "Concise, Safe, Interoperable",
      "example_code": "fun main() {\n    println(\"Hello, World!\")\n}",
      "website": "https://kotlinlang.org/"
    }
  ]
}

router.get('/data', (req, res) => {
  res.send(data);
});

router.get('/reg', (req, res) => {
  res.send({ msg: 'register Here' });
});

router.get('/details/:name', (req, res) => {
  const languageName = req.params.name;
  const language = data.programming_languages.find(lang => lang.name.toLowerCase() === languageName.toLowerCase());

  if (language) {
    res.send({ language }); // Send the entire language object
  } else {
    res.send({ msg: 'Language not found' });
  }
});

router.post('/post_details', (req, res) => {
  const requestedName = req.body.name; // Assuming the client sends the name in the request body

  if (requestedName) {
    const language = data.programming_languages.find(lang => lang.name.toLowerCase() === requestedName.toLowerCase());

    if (language) {
      res.send({ language }); // Send the entire language object
    } else {
      res.send({ msg: 'Language not found' });
    }
  } else {
    res.status(400).send({ msg: 'Bad request. Please provide a name in the request body.' });
  }
});

router.post('/register', async (req, res) => {
  try {
    const { email, username, password, cpassword } = req.body;

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      username,
      password: hashedPassword,
      email,
      cpassword,
    });

    if (password === cpassword) {
      await newUser.save();
      console.log('User added!');
      res.json('User added!');
    } else {
      console.log("Password Not Match / Can't Save");
      res.status(400).json("Password Not Match / Can't Save");
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if the user exists
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Compare the provided password with the hashed password in the database
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    res.status(200).json({ message: 'Login successful' });
    console.log('Login Successfull');
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

module.exports = router;
