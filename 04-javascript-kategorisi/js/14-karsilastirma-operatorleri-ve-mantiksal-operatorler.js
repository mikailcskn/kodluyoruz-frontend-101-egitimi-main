let price = "100"
let user = "Miko"

// Eşitse
console.log("== :", price == 1)
console.log("== :", price == 100)

// Hem değeri hem de türü eşitse
console.log("=== :", price === 1)
console.log("=== :", price === 100)

// Eşit değilse
console.log(user != "guest")

// Küçükse
console.log("price < 100", price < 100)

// Küçük Eşitse
console.log("price <= 100", price <= 100)

// Büyükse
console.log("price > 200", price > 200)

// Büyük Eşitse
console.log("price >= 100", price >= 100)

// && ve
price = 0
console.log( price > 0 && user != "guest") // burada 2 koşulunda  karşılaması gerek karşılamadığı için false 

// || veya
console.log( price > 0 || user != "guest") // burada tek bir koşulun karşılaması yeterlidir.

// ! değil (tersi)
user = "guest"
price = 1
console.log( price > 0 && !user == "guest") // burada koşulun tam tersi alınırıyor. (!) işaretiyle.