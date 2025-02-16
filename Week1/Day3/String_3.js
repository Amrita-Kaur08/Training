// String Functions

// String at()
let text = "Hello";
let character = text.at(0);
console.log(character)

let str1="Welcome to JavaScript"
console.log(str1.at(2))

//String anchor()
const String = "Hello JavaScript";
console.log(String.anchor("Hello"))

//String Concat()
const string1 = "String is";
const string2 = "immutable";

console.log(string1.concat(" ", string2));
console.log(string2.concat("_", string1));

//String endswith()

let sentence1 = "Hii! Everyone";
console.log(sentence1.endsWith("Everyone"));
console.log(sentence1.endsWith("Everyone", 5));

let sentence2 = "Is JavaScript easy?";
console.log(sentence2.endsWith("easy?"));

//String startswith 
let text1="Hii! Everyone";
console.log(text1.startsWith("Hii!"));

let text2="Is JavaScript easy?";
console.log(text2.startsWith("Is",0));

//String includes()
let sentence = "Hello world, welcome to the universe.";
let word = "welcome";
console.log(sentence.includes(word))

      
//String indexof
let paragraph = "Welcome to JavaScript String indexof function";
let Term = "JavaScript";
let index = paragraph.indexOf(Term);
console.log(`The index of the "${Term}" is ${index}`);

//String replace()
const replaces_word = "Hard work is the key to success";
console.log(replaces_word.replace("the", "a"));

//String Split
const str = "Javascript make page dynamic and interactive";
const letters = str.split(" ");
console.log(letters[3]);

//String tolowercase
let lower = "hello world , Im Javascript";
console.log(lower.toLowerCase());

//String touppercase
let upper = "hello world , Im Javascript";
console.log(lower.toUpperCase());

//String trim()
const message = "   Hello world!   ";
console.log(message.trim());

//String StringLength
let mssg="Hello JavaScript"
console.log(mssg.length)


//Finding the Length of a String

const str_len = "Hello, World!";
console.log(str_len.length); // Output: 13

// Converting a String to Uppercase

const lowerStr = "hello, world!";
console.log(lowerStr.toUpperCase()); // Output: "HELLO, WORLD!"

// Checking if a String Starts with a Specific Substring

const str_sub = "JavaScript";
console.log(str_sub.startsWith("Java")); // Output: true

// Replacing a Substring within a String

const str_replace = "Hello, World!";
console.log(str_replace.replace("World", "JavaScript")); // Output: "Hello, JavaScript!"

// Splitting a String into an Array of Substrings

const str_arr = "apple,banana,orange";
console.log(str_arr.split(",")); // Output: ["apple", "banana", "orange"]

// String Constructor
// Creating a New String Using the String Constructor

const newStr = new String("Hello, World!");
console.log(newStr); // Output: [String: 'Hello, World!']

// Difference Between String Literal and String Object

const literal = "Hello";
const object = new String("Hello");
console.log(typeof literal); // Output: "string"
console.log(typeof object); // Output: "object"

// Convert a Number to a String

const num_str = 123;
console.log(String(num_str)); // Output: "123"


// Create a String from a Boolean Value

const bool = true;
console.log(String(bool)); // Output: "true"

// length()
// Find the Length of a String

const str_length = "JavaScript";
console.log(str_length.length); // Output: 10

// Length of an Empty String

const emptyStr = "";
console.log(emptyStr.length); // Output: 0

// Use length to Iterate Over Characters

const str_iterate = "Hello";
for (let i = 0; i < str.length; i++) {
  console.log(str[i]);
}
// Length Includes Spaces and Special Characters

const str_include = "Hello, World!";
console.log(str_include.length); // Output: 13

// charAt()
// Get Character at a Specific Index

const str_index= "JavaScript";
console.log(str_index.charAt(4)); // Output: "S"

// Index Out of Range

const str_outindex= "JavaScript";
console.log(str_outindex.charAt(20)); // Output: ""

// Iterate Over Characters Using charAt

for (let i = 0; i < str.length; i++) {
  console.log(str.charAt(i));
}

// Difference Between charAt and Bracket Notation

console.log(str.charAt(0)); // Output: "J"
console.log(str[0]); // Output: "J"

// Get the Last Character of a String

console.log(str.charAt(str.length - 1)); // Output: "t"

// concat()
//Concatenate Two Strings

const str_con = "Hello";
const str2 = "World";
console.log(str_con.concat(", ", str2)); // Output: "Hello, World"

// Concatenate More Than Two Strings

console.log(str_con.concat(" ", str2, "!")); // Output: "Hello World!"

// Difference Between concat() and +

console.log(str_con.concat(str2)); // Output: "HelloWorld"
console.log(str_con + str2); // Output: "HelloWorld"

// Concatenate a String with a Number

const num = 123;
console.log(str1.concat(num)); // Output: "Hello123"

// Concatenate Array of Strings

const strings = ["Hello", "World", "JavaScript"];
console.log("".concat(...strings)); // Output: "HelloWorldJavaScript"
