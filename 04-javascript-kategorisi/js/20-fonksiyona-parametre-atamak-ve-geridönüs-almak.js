// eğer bu bilgi gelmez ise function çalışmaz, hata verir! ileride sıkıntı yaşatır.
// yani dışarıya bağımlı olur. 
 let firstName = "Miko"


 // function greetings(firstName="") bu kod içerisindeki firstName benzer isimde 
 //olsa da artık bir parametre olduğu için dışarıdaki değişkene bağlı kalmıyor.

function greetings(firstName="" , lastName="") {  // bu fonksiyon default parametre aliyor..
    // console.log(`Merhaba ${firstName ? firstName : ""} `) // kullanılabilecek bir yöntem, varsa yazdir yoksa bos yazdir
    console.log(`Merhaba ${firstName} ${lastName}`)
}

console.log(firstName) // buradaki değisken oluyor
greetings() // fonksiyona parametre gondermedik ??
greetings("parametre")

function greetings2(firstName, lastName) {
    // burada fonksiyon blok'u icinde calistigimiz icin birden fazla kullanabiliriz
    let info = `Merhaba ${firstName} ${lastName}`
    return info // return disariya bilgi gonderdigi  icin bilgiyi yakalamamiz gerekiyor yoksa sonuc alamayiz
}


let greetingsInfo = greetings2("Ad", "Soyad")
// let info = "deneme" // let yapısı bir blok içinde çalıştığı için global blokda tekrar tanımlanmaz
console.log(greetingsInfo)

function domIdWriteInfo(id, info) {
    let domObject = document.querySelector(`#${id}`)
    domObject.innerHTML = info
}

let htmlInfo = `<span style="color:red">Color REDDD</span>`

domIdWriteInfo('greeting', htmlInfo)
domIdWriteInfo('info', greetings2("Mikail", "CUŞKUN"))