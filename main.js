const cennikUslug = document.createElement('div')
cennikUslug.setAttribute("class", "div-cennik")
const paragrafCennikowWZamowieniu = document.createElement('p')
paragrafCennikowWZamowieniu.setAttribute("class", "cenniki")
paragrafCennikowWZamowieniu.innerHTML = "Cennik uslug: <br> Henna - 50zl <br> Redukowanie brwi - 40zl <br> Zabiegi pielęgnacyjne na okolice oczu - 60zl"
cennikUslug.appendChild(paragrafCennikowWZamowieniu)
app.appendChild(cennikUslug)

const uslugiIOsoby = document.createElement('div')
const uslugi = document.createElement('div')
uslugi.setAttribute('class', "uslugi")
const selectUslug = document.createElement('select')
const optionUslug1 = document.createElement('option')
optionUslug1.innerText = "Henna"
const optionUslug2 = document.createElement('option')
optionUslug2.innerText = "Redukowanie brwi"
const optionUslug3 = document.createElement('option')
optionUslug3.innerText = "Zabiegi pielęgnacyjne na okolice oczu"
const osoby = document.createElement('div')
osoby.setAttribute("class", "osoby")
const selectOsob = document.createElement('select')
const optionOsob1 = document.createElement('option')
optionOsob1.innerText = "1"
const optionOsob2 = document.createElement('option')
optionOsob2.innerText = "2"
const optionOsob3 = document.createElement('option')
optionOsob3.innerText = "3"
uslugiIOsoby.appendChild(uslugi)
uslugiIOsoby.appendChild(selectUslug)
uslugiIOsoby.appendChild(optionUslug1)
uslugiIOsoby.appendChild(optionUslug2)
uslugiIOsoby.appendChild(optionUslug3)
grid.appendChild(selectUslug)
uslugiIOsoby.appendChild(osoby)
uslugiIOsoby.appendChild(selectOsob)
uslugiIOsoby.appendChild(optionOsob1)
uslugiIOsoby.appendChild(optionOsob2)
uslugiIOsoby.appendChild(optionOsob3)
grid.appendChild(selectOsob)