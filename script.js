let name = prompt("Ismingizni kiriting")
while (!isNaN(name) ) {
    name = prompt("Xato! Iltimos, qaytadan urinib ko'ring")
}
let thisYear = +prompt("Hozirgi yilni kiriting")
while (isNaN(thisYear) || thisYear==0) {
    thisYear = +prompt("Xato! Iltimos, qaytadan urinib, hozirgi yilni kiriting!")

}

let birthYear = +prompt("Tug'ilgan yilingizni kiriting")
while (isNaN(birthYear) || birthYear==0) {
    birthYear = +prompt("Xato! Iltimos, qaytadan urinib, tug'ilgan yilingizni kiriting!")
}

function countAge() {
    return (thisYear-birthYear)
}
console.log(`${name}, sizning yoshingiz ${countAge()} da `);