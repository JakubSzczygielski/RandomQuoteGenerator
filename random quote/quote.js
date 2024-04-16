let place = document.getElementById("place");
let author = document.getElementById("author");

async function randomQuote() {
  const response = await fetch("https://api.quotable.io/random");
  const quote = await response.json();

  // Output the quote and author name
  place.innerText = `${quote.content}`;
  place.style.fontStyle = "italic";
  author.innerText = "-" + quote.author;
}

let quote = document.getElementById("nextQuote");
quote.addEventListener("click", function () {
  randomQuote();
});


