let fullName = prompt("Lütfen Adınızı Giriniz")
console.log(fullName) //fakat "console" komutunu yazarsanız bilgiye ulaşabilirsiniz.

let greeting = document.querySelector("#greeting")

greeting.innerHTML = `${greeting.innerHTML} <small style="color:red">${fullName}</small>`