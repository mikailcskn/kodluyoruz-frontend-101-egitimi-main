let username = prompt("Kullanici Adinizi Giriniz")
let info = document.querySelector("#info")

// ternary kullanimi:
// kosul ? dogruysa
// : yanlissa

info.innerHTML = `${username.length > 0 ? username : "Kullanici bilginiz bulunamamaktadır :(" }`