const quotes = [
    "Your time is limited, so don't waste it living someone else's life. - Steve Jobs",
    "The people who are crazy enough to think they can change the world are the ones who do. - Steve Jobs",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "Everything you've ever wanted is on the other side of fear. - George Addair"
];

// create a set as a set can only contain one of each element - no dupes
const usedIndexs = new Set();

// get the html element that the quote will fill
const quoteElement = document.getElementById('quote');

function generateQuote(){

    if(usedIndexs.size >= quotes.length){
        usedIndexs.clear();
    }

    while(true){

        // clear the set if the set is the size of the length of the array
        // this means all quotes have been used & it is time to clear the set to start again


        // generate a random index between 0 and the number - 1 of the quotes array
        const randomIndex = Math.floor(Math.random() * quotes.length);

        // if the quote has already been used, i.e. already in the set, 
        // go back to top of while loop & generate a new randomIndex
        if (usedIndexs.has(randomIndex)) continue

        // the quote that has not already been used before
        const quote = quotes[randomIndex];

        // set the quote that has not been used to the
        // innerHTML of the quoteElement p tag
        quoteElement.innerHTML = quote;

        // add the index from the quote that was just used to the set
        // as that specific quote does not need to be used again
        // until all quotes have been used
        usedIndexs.add(randomIndex);

        // break as the while true loop will never end until a break occurs
        break
    }
}