
function generateQuote() {
  fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json())
    .then((data) => {

      let quote = document.querySelector("p");
      let span = document.querySelector("span");

      quote.innerText = `"${data.slip.advice}"`;
      span.innerText = `ADVICE #${data.slip.id}`;
      
    })
    .catch((error)=>{
      console.error("Error fetching advice:", error);
      document.querySelector("p").innerText ="Oops! Something went wrong. Try again.";
    })
}

document.querySelector(".icon").addEventListener("click", generateQuote);
