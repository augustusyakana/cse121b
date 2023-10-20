/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.querySelector('#temples');
let templeList = [];

/* async displayTemples Function */
const displayTemples = (temples) => {
    temples.forEach((temple) =>{
        const article = document.createElement('article');
        const nameElement = document.createElement('h3');
        nameElement.textContent = temple.templeName;
        const img = document.createElement('img');
        img.src = temple.imageUrl;
        img.alt = temple.location;
        article.appendChild(nameElement);
        article.appendChild(img);
        templesElement.appendChild(article);
    })
}



/* async getTemples Function using fetch()*/
let getTemples = async () => {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    if (response.ok) {
        templeList =  await response.json();
        displayTemples(templeList);
    }
}

/* reset Function */
const reset = () => {
    templesElement.innerHTML = '';
}

/* sortBy Function */
const sortBy = (temples) =>{
    reset();
    const filter = document.querySelector('#sortBy').value;
    switch (filter){
        case "utah":
            displayTemples(temples.filter((word) => word.location.includes("Utah")));
            break;

        case "notutah":
            displayTemples(temples.filter((word) => !word.location.includes("Utah")));
            break;
        
        case "older":
            displayTemples(temples.filter((word) => word.dedicated < "1950"));
            break;
        
        case "all":
            displayTemples(temples);

    }
    
}




/* Event Listener */
document.querySelector('#sortBy').addEventListener('change', () => {
    sortBy(templeList);
})

getTemples();
