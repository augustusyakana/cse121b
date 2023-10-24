const quoteContainer = document.querySelector('#quoteContainer');
const likesContainer = document.querySelector('#likesContainer');
const quoteBtn = document.querySelector('#quoteBtn');
const heartBtn = document.querySelector('#heart');
const likesBtn = document.querySelector('#showLikes');
import {addToLikes, reset, displayLikes, displayQuotes} from "./functions.js";

const likes = [];
const error = "ERROR: NO QUOTE!"

const getQuotes = async () => {
    const url = 'https://api.kanye.rest';
    const response = await fetch(url);
    method: 'GET';
    Headers: {
        "Content-Type: application/json"
    }
    body: JSON.stringify({
        name: 'user1'
    })
    if (response.ok) {
        let quote = await response.json();
        // console.log(quote.quote);
        displayQuotes(quote.quote);
    }
    
}

quoteBtn.addEventListener('click', () =>{
    reset();
    heartBtn.setAttribute('style', 'color: white;');
    getQuotes()
})

heartBtn.addEventListener('click', () =>{
    let quote = document.querySelector('#quote');
    if (!quote || quoteContainer.textContent == '') {
        reset();
        const para = document.createElement('p');
        para.textContent = error;
        quoteContainer.appendChild(para);

    } else {
        heartBtn.setAttribute('style', 'color: blue;');
        addToLikes(likes, quote)
    }
})

likesBtn.addEventListener('click', () =>{
    reset();
    displayLikes(likes);


})




