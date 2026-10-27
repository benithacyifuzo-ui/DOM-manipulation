// element selectors in HTML 

//  1. getting Element by class name

let title = document.getElementsByClassName('title');

// 2. getting Element by id

let para = document.getElementById('para');


// 3 .Query selectors  it picks the first element that matches the
//  selector in a node list (in HTML document)

let tage = document.querySelector('h1');
let className = document.querySelector('.title');
let idName = document.querySelector('#para');

// 4 .querySelectorAll it picks all the elements that matches the
//  selector in a node list (in HTML document)

let allTage = document.querySelectorAll('h1');
let allClassName = document.querySelectorAll('.title');
let allIdName = document.querySelectorAll('#para'); 


// 5. getting Element by tag name

let tag = document.getElementsByTagName('h1');

// 6. getting Element by css selectos

let cssTag = document.querySelector('.title span a');
let cssId = document.querySelector('#para a');

// 7. getting ELement by HTML Object collection

let htmlCollection = document.forms[0].elements;



// editing the content of the selected elements 

// innerHTML property 

title[0].innerHTML = 'A Login Form';

title[0].style = 'color: red; font-size: 30px; text-align: center; padding: 10px; border-radius: 10px;';

// updating the word into the uppercase

let paragraph = document.getElementsByTagName('p');
paragraph[0].innerHTML = paragraph[0].innerHTML.toUpperCase();

// textContent property


// creating a new element and adding it to the DOM

let newElement = document.createElement('div');

newElement.innerHTML = `
   <div class="card" style="border: 1px solid #ccc; padding: 20px; margin: 20px; border-radius: 10px;">
    <img src="/download.webp" alt="Image" style="width: 100px; height: 100px;">
    <h2>New Element</h2>
    <p>This is a new element added to the DOM.</p>
    </div>
`;

document.body.appendChild(newElement);

// removing an element from the DOM 

let removeElement = document.getElementById('form');
// removeElement.remove();