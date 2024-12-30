let passwordLength = document.getElementById("passwordLength") // ini adalah pemanggilan input dari id html untuk di pakai di javascript
let password = document.getElementById("password") // ini juga adalah pemanggilan input dai id html untuk dipakai di javascript
let saveButton = document.getElementById("saveButton")

const generatePassword = (len) => {        // generatePassword adalah untuk membuat password yang mempunyai parameter length (yang berarti panjang dari keseluruhan generatePassword)
    const lowerAlphabet = "abcdefghijklmnopqrstuvwxyz"
    const upperAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const numeric = "0123456789"
    const symbol = "!@#$%^&*()_+=-{}[]';:/?.,<>~`"

    const data = lowerAlphabet + upperAlphabet + numeric + symbol
    let generator = '';
    for (let index = 0; index < len; index++) {         // looping
        generator += data[~~(Math.random() * data.length)]; // ~~ math flor
    }
    return generator 
}

const getPassword = () => { // pemanggilan generatePassword dengan menggunakan getPassword
    const newPassword = generatePassword(passwordLength.value)
    password.value = newPassword
    setTimeout(() => {                      // untuk menampilkan alert dengan settingan waktu 
        alert('password has been generated!')
    }, 1000)

}

const savePassword = () => {
    document.title = password.value
    saveButton.setAttribute('href','data:text/plain;charset=utf-8,' + encodeURIComponent(`saya: ${document.title}`))
    saveButton.setAttribute('download','MyPasswordGeneratorLOG.txt')
    setTimeout(() => {
        alert('berhasil disimpan')
    }, 1000)
}