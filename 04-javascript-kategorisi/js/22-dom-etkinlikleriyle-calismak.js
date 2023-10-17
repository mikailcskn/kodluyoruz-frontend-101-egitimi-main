let greeting = document.querySelector("#greeting")
greeting.addEventListener("click", domClick) // tiklandiginda yapilacak islem
// greeting.addEventListener("mouseover", domClick) // üzerine gelindiginde yapilacak islem

function domClick() {   
    console.log("etkinlik denetlendi")
    this.style.color == "red" ? this.style.color = "black" : this.style.color = "red" 
   // console.log(this.innerHTML = "tiklandigi icin bilgi degisti")
}