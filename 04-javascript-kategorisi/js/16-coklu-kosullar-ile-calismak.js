let username = prompt("Kullanici Adinizi Giriniz")
let age = prompt("Yasinizi Giriniz")
let info = document.querySelector("#info")

if (username && age >= 18 ) {
    info.innerHTML = "Ehliyet alabilirsiniz."
}
else if (!username) {
    info.innerHTML = "Kullanici Adiniz Yok"
}
else if (!( age >= 18 )) {
    info.innerHTML = "Yas bilginiz yok veya 18 yasindan kucuksunuz"
}