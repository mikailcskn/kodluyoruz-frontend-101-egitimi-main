function hello() {
    console.log("Merhaba")
    helloWorld()
}

function helloWorld() {
    console.log("Merhaba Dünya")
}

// hata alabiliriz.
// diğer tanımlamalar yapılması gerek! sakın unutma başka bir yerden kod alırken
// function userCheck() {
//    if (username && age >= 18 ) {
//        info.innerHTML = "Ehliyet alabilirsiniz."
//    }
//    else if (!username) {
//        info.innerHTML = "Kullanici Adiniz Yok"
//    }
//    else if (!( age >= 18 )) {
//        info.innerHTML = "Yas bilginiz yok veya 18 yasindan kucuksunuz"
//    }
// }


hello() // fonksiyonu çalıştırma komutu
