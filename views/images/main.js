const quote = document.querySelector('.quote-content')
const auth = document.querySelector('.container-author')
var quotedata = " "
var rval
function genrval(){
    rval = Math.floor(Math.random() * 1500)
}

const getquotes = async () =>{
    const api = "https://type.fit/api/quotes";
    const data = await fetch(api);
    const realdata = await data.json();
    genrval();
    quotedata = realdata[rval]; 
    quote.innerHTML = realdata[rval].text;
    auth.innerHTML = '- ' + realdata[rval].author;
    // console.log(realdata[0].text);
}

const opentwitter = () => {
    const turl = 'https://twitter.com/intent/tweet'
    window.open(`${turl}?text=${quotedata.text}`)

}