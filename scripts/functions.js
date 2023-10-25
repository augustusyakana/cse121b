
export function addToLikes(list, quote) {
    if (list.length < 5) {
        list.push(quote)
        displayLikes(list);
    } else if (list.length >= 5){
        list.shift();
        displayLikes(list);
        list.push(quote);
        clearLikes();
        displayLikes(list);
        
    } 
    
}

export const reset = () => {
    quoteContainer.innerHTML = '';
    document.querySelector('#heart').setAttribute('style', 'color: white;');
}

export function displayLikes(likes){

    if (likes.length == 0){
        const para = document.createElement('p');
        para.setAttribute('id', 'quote');
        para.textContent = "NOTHING IN LIKES!"
        quoteContainer.appendChild(para);

    } else  {
        likes.forEach((like) =>{
            const para = document.createElement('p');
            para.setAttribute('id', 'quote');
            likesContainer.appendChild(like);
            
        })
    }
}

export function clearLikes(){
    likesContainer.innerHTML = '';
    reset();
}

export function displayQuotes(quote){
    const para = document.createElement('p');
    para.setAttribute('id', 'quote');
    para.textContent = quote;
    quoteContainer.appendChild(para);
}