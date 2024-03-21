async function Generate(){
    const response = await  fetch("https://api.quotable.io/random");
    const quote = await response.json();
    document.getElementById("quote").innerHTML= quote.content;
    document.getElementById("author").innerHTML=quote.author;
}