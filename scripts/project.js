const quoteContainer = document.querySelector('#quoteContainer');
const quoteBtn = document.querySelector('#quoteBtn');


function displayQuotes(quote){
    const para = document.createElement('p');
    para.setAttribute('id', 'quote');
    para.textContent = quote;
    quoteContainer.appendChild(para);
}

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

const reset = () => {
    quoteContainer.innerHTML = '';
}

quoteBtn.addEventListener('click', () =>{
    reset();
    getQuotes()
})



