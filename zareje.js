const h2 = document.createElement('h2')
h2.innerText = "Rejestracja"
const linieDiv = document.createElement('div')
const linieP = document.createElement('p')
linieP.setAttribute("class", "border-main")
linieDiv.appendChild(linieP)
zarej.appendChild(h2)
zarej.appendChild(linieDiv)

const imie = document.createElement('input')
const idImie = imie.id = "imie-1"
imie.id = idImie
imie.setAttribute('placeholder', 'Imie i Nazwisko')
const email = document.createElement('input')
const idEmail = email.id = "email-1"
email.id = idEmail
email.setAttribute('placeholder', 'E-mail')
const haslo = document.createElement('input')
const idHaslo = haslo.id = "haslo-1"
haslo.id = idHaslo
haslo.setAttribute('placeholder', 'Haslo')
const tel = document.createElement('input')
const idTel = tel.id = "tel-1"
tel.id = idTel
tel.setAttribute('placeholder', 'Telefon')
const button = document.createElement('button')
const br = document.createElement('br')
button.setAttribute("class", "btn1")
button.setAttribute("onclick", "wysli()")
button.innerText = "Zarejestruj"
grid.appendChild(imie)
grid.appendChild(email)
grid.appendChild(haslo)
grid.appendChild(tel)
log.appendChild(br)
log.appendChild(button)

const h2Zarej = document.createElement('h2')
const a = document.createElement('a')
a.setAttribute("class", "zarej")
a.setAttribute("href", "log.html")
a.innerText = "Zaloguj się"
const linieDiv1 = document.createElement('div')
const linieP1 = document.createElement('p')
linieP1.setAttribute("class", "border-main")
linieDiv1.appendChild(linieP1)
h2Zarej.appendChild(a)
linieDiv1.appendChild(linieP1)
log.appendChild(h2Zarej)
log.appendChild(linieDiv1)

function wysli() {
    sprImie(); sprEmail(); sprTel(); sprHaslo()
}

function sprImie() {
    const imie = document.getElementById('imie-1').value
    if (imie.length < 5) {
        alert('Wpisz imie i Nazwisko')
    } else
        console.log("Imie i Nazwisko", imie)
}

function sprEmail() {
    const email = document.getElementById('email-1').value
    if (email.search('@') === -1) {
        alert('niepoprawny email')
    }
    else {
        console.log("E-mail", email)
    }
}

function sprTel() {
    const arr = document.getElementById('tel-1').value.split('')
    const num = arr.filter(item => {
        if (item === '0' || item === '1' || item === '2' || item === '3' || item === '4' || item === '5' || item === '6' || item === '7' || item === '8' || item === '9') {
            return item
        } else {
            alert('Tylko cyfry')
        } 
    })
    let numer = document.getElementById('tel-1').value
    console.log("Numer", numer)
}

function sprHaslo() {
    const haslo1 = document.getElementById('haslo-1').value
    console.log("Haslo", haslo1)
}