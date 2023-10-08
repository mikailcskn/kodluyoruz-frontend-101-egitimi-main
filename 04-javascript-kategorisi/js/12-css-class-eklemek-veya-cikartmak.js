
let greeting = document.querySelector("#greeting")

greeting.classList.add("text-primary")

greeting.classList.add("title") // Tek Tek class Eklemek

greeting.classList.add("new-info","second-class","third-class") //  Birden fazla class eklemek

greeting.classList.remove("title","second-class","third-class") //  Birden fazla class silmek

console.log(greeting.classList)