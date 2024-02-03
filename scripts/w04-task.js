/* LESSON 3 - Programming Tasks */

/* Profile Object  */

let myProfile = {
    name: "Lauren Browning",
    photo: "images/jerenandlauren.png",
    favoriteFoods: [' ice cream', ' salt n vinager chips', ' pickles', ' thai'],
    hobbies: ['reading', 'pickleball', 'home design'],
    placesLived: [],

}

/* Populate Profile Object with placesLive objects */

const place1 = {
    place: 'Richmond, VA',
    length: '4 years'
}
const place2 = {
    place: 'Rexburg, ID',
    length: '1 year'
}
const place3 = {
    place: 'Ningbo, China',
    length: '.5 years'
}
const place4 = {
    place: 'Idaho Falls, ID',
    length: '6 years'
}
const place5 = {
    place: 'Kiev, Ukraine',
    length: '.5 years'
}

myProfile.placesLived.push(place1, place2, place3, place4, place5
);


/* DOM Manipulation - Output */

/* Name */

document.querySelector('#name').textcontent = myProfile.name;

/* Photo with attributes */
document.querySelector('#photo').setAttribute("src", myProfile.photo);
document.querySelector('#photo').setAttribute("alt", myProfile.name);

/* Favorite Foods List*/

myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement("li");
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
});
/* Hobbies List */

myProfile.hobbies.forEach(hobby => {
    let ul = document.createElement("ul");
    ul.textContent = hobby;
    document.querySelector('#hobbies').appendChild(ul);
})
/* Places Lived DataList */

myProfile.placesLived.forEach(place => {
    // console.log(place);
    const dt = document.createElement("dt");
    const dd = document.createElement("dd");
    dt.textContent = place.place;
    dd.textContent = place.length;
    document.querySelector("#places-lived").appendChild(dt);
    document.querySelector("#places-lived").appendChild(dd);
  });
