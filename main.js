const grid = document.createElement('div')
grid.setAttribute('class', 'grid')
const div1 = document.createElement('div')
div1.setAttribute('class', 'cennik')
const paragrafCennikowWZamowieniu = document.createElement('p')
paragrafCennikowWZamowieniu.setAttribute("class", "cenniki")
paragrafCennikowWZamowieniu.innerHTML = "Cennik uslug: <br> Henna - 50zl <br> Redukowanie brwi - 40zl <br> Zabiegi pielęgnacyjne na okolice oczu - 60zl"

const div2 = document.createElement('div')
div2.setAttribute('class', 'zdjecia')
const zdjecia1 = document.createElement('img')
zdjecia1.setAttribute('src', './img/paznokcie1.jpg')
const zdjecia2 = document.createElement('img')
zdjecia2.setAttribute('src', './img/paznokcie.webp')
const zdjecia3 = document.createElement('img')
zdjecia3.setAttribute('src', './img/Paznokcieq.jpg')
const zdjecia4 = document.createElement('img')
zdjecia4.setAttribute('src', './img/paznokcie3.png')
const zdjecia5 = document.createElement('img')
zdjecia5.setAttribute('src', './img/paznokciez.jpg')
const zdjecia6 = document.createElement('img')
zdjecia6.setAttribute('src', './img/paznokcie2.jpg')

const div3 = document.createElement('div')
div3.setAttribute('class', 'kwadrat')


//grid

const glownyDiv2 = document.createElement('div')
glownyDiv2.setAttribute('class', 'glownyDiv2')

const div5 = document.createElement('div')
div5.setAttribute('class', 'griditem1')

const spotkanie = document.createElement('a')
spotkanie.innerText = 'Umów spotkanie'
spotkanie.setAttribute('href', './zamow.html')
spotkanie.setAttribute('class', 'spotkanie') 

const div6 = document.createElement('div')
div6.setAttribute('class', 'griditem2')

const naglowek1 = document.createElement('p')
naglowek1.setAttribute('class', 'naglowek1')
naglowek1.innerText = 'ostatnio rekomendowane'
const opis = document.createElement('p')
opis.setAttribute('class', 'opis')
opis.innerHTML = '-przekucie uszu, twarzy, brzucha, <br> -depilacje laserowe wąsik, szyja, twarzy, <br> -manicure japoński <br> -manicure hubrydowy, <br> -przedłużanie paznokci +  hybryda, <br> -uzupełnianie paznokci, <br> -pedicure z odrzywką, <br> -depilacje woskiem, <br> -peeling twarzy,'

const div7 = document.createElement('div')
div7.setAttribute('class', 'griditem3')
const naglowek2 = document.createElement('p')
naglowek2.setAttribute('class', 'naglowek1')
naglowek2.innerText = 'Usługi'
const uslugi = document.createElement('p')
uslugi.innerText = 'Usługi kosmetyczne'

const div8 = document.createElement('div')
div8.setAttribute('class', 'griditem4')
const kontakt = document.createElement('p')
kontakt.setAttribute('class', 'naglowek1')
kontakt.innerText = 'Kontakt'
const numer = document.createElement('p')
numer.setAttribute('class', 'numer')
numer.innerText = '123456789'









grid.appendChild(div1)
grid.appendChild(div2)
grid.appendChild(div3)
div1.appendChild(paragrafCennikowWZamowieniu)

grid.appendChild(div2)
div2.appendChild(zdjecia1)
div2.appendChild(zdjecia2)
div2.appendChild(zdjecia3)
div2.appendChild(zdjecia4)
div2.appendChild(zdjecia5)
div2.appendChild(zdjecia6)

grid.appendChild(div3)

glownyDiv.appendChild(grid)

glownyDiv.appendChild(glownyDiv2)
glownyDiv2.appendChild(div5)
div5.appendChild(spotkanie)

glownyDiv2.appendChild(div6)
div6.appendChild(naglowek1)
div6.appendChild(opis)

glownyDiv2.appendChild(div7)
div7.appendChild(naglowek2)
naglowek2.appendChild(uslugi)

glownyDiv2.appendChild(div8)
div8.appendChild(kontakt)
div8.appendChild(numer)




