const h2 = document.createElement('h2')
h2.innerText = "Logowanie"
const linieDiv = document.createElement('div') 
const linieP = document.createElement('p')
linieP.setAttribute("class", "border-main")
linieDiv.appendChild(linieP)
log.appendChild(h2)
log.appendChild(linieDiv)

const email = document.createElement('input')
const idEmail = email.id = "email-1"
email.id = idEmail
email.setAttribute("class", "inputEmailIHaslo")
const haslo = document.createElement('input')
const idHaslo = haslo.id = "haslo-1"
haslo.id = idHaslo
haslo.setAttribute("class", "inputEmailIHaslo")
const tel = document.createElement('input')
const idTel = tel.id = "tel-1"
tel.id = idTel
tel.setAttribute("class", "tel1")
const button = document.createElement('button')
const br = document.createElement('br')
button.setAttribute("class", "btn1")
button.setAttribute("onclick", "wysli()")
button.innerText = "Zaloguj"
const h2Zarej = document.createElement('h2')
const a = document.createElement('a')
a.setAttribute("class", "zarej")
a.setAttribute("href", "./zareje.html")
a.innerText = "Zarejestruj się"
const linieDiv1 = document.createElement('div') 
const linieP1 = document.createElement('p')
linieP1.setAttribute("class", "border-main")
linieDiv1.appendChild(linieP1)
grid.appendChild(email)
grid.appendChild(haslo)
zarej.appendChild(tel)
zarej.appendChild(br)
zarej.appendChild(button)
h2Zarej.appendChild(a)
linieDiv1.appendChild(linieP1)
zarej.appendChild(h2Zarej)
zarej.appendChild(linieDiv1)

function wysli() {
    const sprawdEmail = email
    console.log(sprawdEmail)
}