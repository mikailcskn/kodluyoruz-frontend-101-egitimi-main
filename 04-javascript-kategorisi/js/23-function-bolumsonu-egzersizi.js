
let counter = 0
let counterDOM = document.querySelector('#counter') 
let increaseDOM = document.querySelector('#increase') 
let decreaseDOM = document.querySelector('#decrease') 

counterDOM.innerHTML = counter

increaseDOM.addEventListener("click", clickEvent)
decreaseDOM.addEventListener("click", clickEvent)

function clickEvent() {
    console.log(this.id)
// birinci yontem
    // if (this.id == "increase") {
    //    counterDOM.innerHTML = counter += 1
    // } else 
    // counterDOM.innerHTML = counter -= 1

// ikinci yontem daha kisa kod kullanimi var
    this.id == "increase" ? counter += 1 :  counter -= 1
    counterDOM.innerHTML = counter
}