 let lastChild = document.querySelector("ul#list>li:last-child")
 lastChild.innerHTML= "son oge degistiii... "

 let FirstChild = document.querySelector("ul#list>li:first-child")
 FirstChild.innerHTML= "ilk oge degistiii... "

 let ulDom = document.querySelector("ul#list")
 let liDom = document.createElement('li')

liDom.innerHTML = "Kendi olusturdugumuz oge"

ulDom.append(liDom) // APPEND EN SONA EKLER

ulDom.prepend(liDom) //  PREPEND EN BASA EKLER