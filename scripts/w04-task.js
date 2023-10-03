/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Augustus Yuki Yakana",
    photo: "images/yuki.png",
    favoriteFood: [
        "Ramen",
        "PHO",
        "Mwul",
        "Fish"
    ],
    hobbies: [
        "Coding",
        "Designing",
        "Music",
    ],
    placesLived: [],
};




/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    {
        place: "Pohnpei, FSM",
        length: "24 years"
    },
    {
        place: "Honolulu, HI",
        length: "4 years",
    }

)


/* DOM Manipulation - Output */


/* Name */
document.querySelector('#name').textContent = myProfile.name;

/* Photo with attributes */
document.querySelector('#photo').setAttribute("src", `${myProfile.photo}`);

/* Favorite Foods List*/

myProfile.favoriteFood.forEach((food) => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
});



/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    let hobbyLi = document.createElement('li');
    hobbyLi.textContent = hobby;
    document.querySelector('#hobbies').appendChild(hobbyLi);
})

/* Places Lived DataList */
myProfile.placesLived.forEach(place => {
    let dt = document.createElement('dt');
    let dd = document.createElement('dd');
    dt.textContent = place.place;
    dd.textContent = place.length;
    document.querySelector('#places-lived').appendChild(dt);
    document.querySelector('#places-lived').appendChild(dd)
    
})


