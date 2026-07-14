console.log("HELOLOLOLOHello Pant! 🚀")


const quotes = [
  "Believe in yourself.",
  "Done is better than perfect.",
  "Stay hungry. Stay foolish.",
  "Small steps every day.",
  "Discipline beats motivation.",
  "Dream big. Start small.",
  "Consistency creates success.",
  "Progress over perfection.",
  "The expert was once a beginner.",
  "Your future is built today.",
  "Success loves preparation.",
  "Action beats overthinking.",
  "Keep showing up.",
  "Every day is a fresh start.",
  "Hard work compounds.",
  "Focus on what matters.",
  "Don't quit before the miracle.",
  "Be stronger than your excuses.",
  "Learn. Build. Repeat.",
  "One bug at a time.",
  "404: Motivation not found.",
  "It works on my machine.",
  "There is no bug, only undocumented features.",
  "Ctrl + S is self-care.",
  "Coffee is my debugging tool.",
  "Sleep is for production servers.",
  "Semicolons save lives.",
  "Eat. Code. Sleep. Repeat.",
  "AI didn't write this... probably.",
  "If it compiles, ship it."
];


document.querySelector("button").addEventListener("click",random_quote_funtion)
function random_quote_funtion(){
    var random_quote = quotes[Math.floor(((Math.random())*(quotes.length)))]
    document.querySelector("p").innerHTML= "random quotes: ["+random_quote+"]"
}
