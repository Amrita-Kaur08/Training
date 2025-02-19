const users = [
    {
      id: 1,
      name: "Charlie Davis",
      age: 28,
      email: "john.doe@example.com",
      address: "123 Main St, Anytown, USA",
      phone: "555-1234",
      isActive: true,
      role: "admin",
      createdAt: "2023-01-01",
      updatedAt: "2023-01-10"
    },
    {
      id: 2,
      name: "Jane Smith",
      age: 34,
      email: "jane.smith@example.com",
      address: "456 Elm St, Othertown, USA",
      phone: "555-5678",
      isActive: false,
      role: "user",
      createdAt: "2023-02-01",
      updatedAt: "2023-02-10"
    },
    {
      id: 3,
      name: "Alice Johnson",
      age: 25,
      email: "alice.johnson@example.com",
      address: "789 Oak St, Sometown, USA",
      phone: "555-8765",
      isActive: true,
      role: "user",
      createdAt: "2023-03-01",
      updatedAt: "2023-03-10"
    },
    {
      id: 4,
      name: "Bob Brown",
      age: 45,
      email: "bob.brown@example.com",
      address: "101 Pine St, Anycity, USA",
      phone: "555-4321",
      isActive: false,
      role: "moderator",
      createdAt: "2023-04-01",
      updatedAt: "2023-04-10"
    },
    {
      id: 5,
      name: "Charlie Davis",
      age: 30,
      email: "charlie.davis@example.com",
      address: "202 Maple St, Anyville, USA",
      phone: "555-6789",
      isActive: true,
      role: "user",
      createdAt: "2023-05-01",
      updatedAt: "2023-05-10"
    }
  ];   

  const userwithAge =users.some(functions(users))
  { if(users.age<20)
    return user
  }

  const car = {
    brand: 'Ford',
    model: 'Mustang',
    year: 1964,
    color: 'red',
    price: 3000,
    available: true,
    features: ['automatic', 'v8', 'leather'],
    start: function () {
      console.log('Car started');
    }
  };
  
  // Access properties
  console.log(car.brand, car['year']);
  
  // Add properties
  car.owner = 'John Doe';
  car['fuelType'] = 'Gasoline';
  console.log(car);
  
  // Remove properties
  delete car.color;
  console.log(car);
  
  // Shallow copy
  const safeCopy = { ...car };
  safeCopy.year = 1960;
  console.log('Original:', car);
  console.log('SafeCopy:', safeCopy);
  
  // Deep copy
  const deepCopy = JSON.parse(JSON.stringify(car));
  deepCopy.features.push('sunroof');
  console.log('Original Features:', car.features);
  console.log('DeepCopy Features:', deepCopy.features);
  
  // Override properties
  const updatedCar = { ...car, model: 'Shelby GT500', price: 7000 };
  console.log(updatedCar);
  
  // Object.keys and Object.values
  console.log(Object.keys(car));
  console.log(Object.values(car));
  console.log(Object.entries(car));


const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
const per1 = new Object();
const per2 = {}

//Constructor - Constructor Function should start from Capital letter
function Person(first, last, age, eyecolor) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eyecolor;
}

const myFather = new Person("John", "Doe", 50, "blue");
const myMother = new Person("Sally", "Rally", 48, "green");


//Using the prototype Property
//The JavaScript prototype property allows you to add new properties to object constructors:

function Person(first, last, age, eyecolor) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eyecolor;
}

Person.prototype.nationality = "English";

//The JavaScript prototype property also allows you to add new methods to objects constructors:


function Person1(first, last, age, eyecolor) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eyecolor;
}

Person1.prototype.name = function() {
  return this.firstName + " " + this.lastName;
};


//Object.values
const details = {
  firstName : "John",
  lastName : "Doe",
  age : 50,
  eyeColor : "blue"
};

let text_details = Object.values(details);

//Object.keys

let text_values = Object.keys(details);

//Object.assign
const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};

// Create Source Object
const person2 = {firstName: "Anne",lastName: "Smith"};

// Assign Source to Target
Object.assign(person1, person2);

//Print
let text=Object.entries(person1)
console.log(text)