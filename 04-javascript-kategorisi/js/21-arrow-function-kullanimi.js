function hello(firstName) {
    console.log(` Merhaba ${firstName}`)
}

hello("JavaScript")

// birinci yontem
const helloFuncV1 = (firstName) => { console.log(` Merhaba ${firstName}`) }
helloFuncV1("Miko")

// ikinci yontem
// tek satırlık bir islem oldugu icin süslü parantez kullanmaya gerek duyulmaz. 
// Tek bir parametre kullanılırsada parantez icine almaya gerek yok
const helloFuncV2 = firstName => console.log(` Merhaba ${firstName}`) 
helloFuncV2("Miko2")

// birden fazla parametre kullanimi
const helloFuncV3 = (firstName , lastName) => 
console.log(` Merhaba ${firstName} ${lastName} `) 

helloFuncV3("Miko3", "CUSKUN")

// tek bir satirlik kod olmadigi icin süslü parantez kullanmamiz gerekiyor.
const helloFuncV4 = (firstName , lastName) => { 
    let info = ` Merhaba ${firstName} ${lastName} `
    console.log(info)
    return info 
}
helloFuncV4("Miko4", "Return")
