/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
const fullName = 'Lauren Browning';
const currentYear = 2024;
let profilePicture = 'images/jerenandlauren.png'

/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
let imageElement = document.getElementById('picture');





/* Step 4 - Adding Content */

nameElement.innerHTML = `<strong>${fullName}</strong>`;
nameElement.textContent = fullName;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `Profile image of ${fullName}`);



/* Step 5 - Array */

const foodArray = [' ice cream', ' salt n vinager chips', ' pickles', ' thai']
document.querySelector("#food").innerHTML = foodArray
var favFood = " french fries"

foodArray.push(favFood);
foodElement.innerHTML += `<br>${foodArray}`;

foodArray.shift();
foodElement.innerHTML += `<br>${foodArray}`;

foodArray.pop();
foodElement.innerHTML += `<br>${foodArray}`;




