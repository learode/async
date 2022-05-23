// Normally fetch() returns a promise but since 
// it takes time its normal to await it.

const quotesUrl = 'https://zenquotes.io/api/quotes';
const quotesUrl1 = 'https://goquotes-api.herokuapp.com/api/v1/random?count=10'

//?cat=famous&count=10'

async function grapQuote(ur) {
    // try {
        const rawQuotes = await fetch('https://zenquotes.io/api/quotes', {mode: 'no-cors'});
        // const quotesJson = await rawQuotes.json();
        
        console.log(rawQuotes);
       

}

grapQuote(quotesUrl);