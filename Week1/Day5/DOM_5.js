// DOM

const h1 = document.querySelector('h1');
const sampleObj = {
key:'example',
a: 'b'
};

let Details = {
 id: null,
 name: null,
 email: null
};


// Object Assign is used to copy or merge objects.
// Object.assign(target, source) - syntax
//Details = Object.assign(Details,{'data from API'});

// OPtional Chaining
console.log(sampleObj?.['d']); // Undefined
console.log(sampleObj?.['key']); // example

//QuerySelectors
const Tag1 = document.querySelector('h1'); // Selects the first <h1> element in the DOM

const Tag2 = document.querySelector('.class-name');
console.log(Tag2);

const allTags = document.querySelectorAll('.class-name');
console.log(allTags);

// GetElement
const Tags = document.getElementsByTagName('h1');
console.log(Tags); // Output: [<h1>Header 1</h1>, <h1>Header 2</h1>]
console.log(Tags[0]); // Output: <h1>Header 1</h1>


const divTag = document.getElementById('div-id');
console.log(divTag); 

const byclass = document.getElementsByClassName('class-name');

const h1Tag = document.getElementById('header');
h1Tag.innerText = "JAVASCRIPT";
console.log(h1Tag); // Output: <h1 id="header">Hello I have changed it from JAVASCRIPT</h1>

// Display None

const h1Tag = document.getElementById('header');
h1Tag.style.display = 'none'; // The <h1> will no longer be visible on the page.

// Button
const btn = document.getElementById('btn');
console.log(btn);  
// Adds the class attribute of the btn element, setting its value to btn btn-primary.
btn.setAttribute('class', 'btn btn-primary');
console.log(btn); // Outputs: <button id="btn" class="btn btn-primary">Click me</button>
btn.setAttribute('disabled', 'disabled');  // Adds a disabled attribute to the btn element, making it unclickable.
console.log(btn);

btn.removeAttribute('disabled'); //  Removes the disabled attribute, making the button clickable again.
console.log(btn); // Outputs: <button id="btn" class="btn btn-primary">Click me</button>


// Selects an element with the id div-id from the DOM and assigns it to the variable divElement.
const Element = document.getElementById('div-id');
console.log(Element); // Outputs: <div id="div-id"></div>

const divElement = document.getElementById('div-id');    
//Creates an array of button objects
const buttons = [
   { id: 1, name: 'Button 1', click: () => console.log('Button 1 clicked') },
   { id: 2, name: 'Button 2', click: () => console.log('Button 2 clicked') }
 ];

buttons.forEach(button => {
   const btn = createButton(button);
   addElement(divElement, btn);
 });

function addElement(parentElement, childElement) {
   parentElement.appendChild(childElement);
 }

function createButton(buttonDetails) {
   const btn = document.createElement('button');
   btn.id = buttonDetails.id;
   btn.innerText = buttonDetails.name;
   buttonDetails.click && btn.addEventListener('click', buttonDetails.click);
   return btn;
 }


