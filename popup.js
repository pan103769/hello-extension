console.log("HELOLOLOLOHello Pant! 🚀")
document.querySelector("button").addEventListener("click",counter_function)
var i = 0
function counter_function(){
    i ++ 
    document.querySelector("p").innerHTML="counter: ["+i+"]"
}