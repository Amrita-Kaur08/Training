// Basic javaScript

const addNumbers = (num1, num2) => num1 + num2;
console.log("Addition: ", addNumbers(10, 5)); // Output: 15

const subtractNumbers = (num1, num2) => num1 - num2;
console.log("Subtraction: ", subtractNumbers(10, 5)); // Output: 5

function multiplyNumbers(a, b) {
    return a * b;
  }
  console.log("Multiplication: ", multiplyNumbers(10, 5)); 

  const squareNumber = (num) => Math.pow(num, 2);
console.log("Square: ", squareNumber(4)); // Output: 16

const cubeNumber = (num) => Math.pow(num, 3);
console.log("Cube: ", cubeNumber(3)); // Output: 27


function calculateSquareRoot(value) {
    if (value < 0) throw new Error("Negative input is not allowed for square root");
    return Math.sqrt(value);
  }
  console.log("Square Root: ", calculateSquareRoot(25)); // Output: 5

  function factorial(num) {
    if (num < 0) throw new Error("Factorial is not defined for negative numbers");
    return num === 0 ? 1 : num * factorial(num - 1);
  }
  console.log("Factorial: ", factorial(5)); // Output: 120

  
  function calculateCircleArea(radius) {
    if (radius < 0) throw new Error("Negative radius not allowed");
    return Math.PI * radius ** 2;
  }
  console.log("Circle Area: ", calculateCircleArea(7)); // Output: ~153.94

  function calculateTriangleArea(base, height) {
    return 0.5 * base * height;
  }
  console.log("Triangle Area: ", calculateTriangleArea(10, 5)); // Output: 25

  function calculateDistance(x1, y1, x2, y2) {
    const dx = x2 - x1;
    const dy = y2 - y1;
    return Math.sqrt(dx * dx + dy * dy);
  }
  console.log("Distance: ", calculateDistance(1, 2, 4, 6)); // Output: ~5


  