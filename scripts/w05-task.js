/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.querySelector('#temples');
let templeList = [];
/* async displayTemples Function */
const displayTemples = (temples) => {
    console.log(temples)
    temples.forEach(element => {
        const newH3 = document.createElement("h3");
        newH3.innerText = element.templeName;
        const addImage = document.createElement("img");
        addImage.setAttribute("src", element.imageUrl);
        addImage.setAttribute("alt", element.location);

        const newArticle = document.createElement("article");
        newArticle.append(newH3, addImage);
        document.getElementById("temples").appendChild(newArticle);
        templesElement.appendChild(newArticle);
    });
}


/* async getTemples Function using fetch()*/
const getTemples = async () => {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    if (response.ok) {
        templeList = await response.json();
        displayTemples(templeList);
    }
}
/* reset Function */
function reset() {
    document.getElementById("temples").innerHTML = "";
}

/* filterTemples Function */
function filterTemples(temples) {
    reset();
    const filter = document.getElementById("filtered").value;
    console.log(filter)
    switch(filter) {
        case "utah":
            displayTemples(temples.filter((temple) => temple.location.includes('Utah')))
            break

        case "notutah":
            displayTemples(temples.filter((temple) => !temple.location.includes('Utah')))
            break

        case "older":
            displayTemples(temples.filter((temple) => Date.parse(temple.dedicated) < new Date(1950, 0, 1)))
            break
        
        case "all":
            displayTemples(temples)
            break
    }

}

/* Event Listener */

document.querySelector("#filtered").addEventListener("change", () => { filterTemples(templeList) });


getTemples()