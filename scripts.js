const unidades = ["zero", "um", "dois", "três", "quatro", "cinco", "seis", "sete", "oito", "nove"]
const dezAdezenove = ["dez", "onze", "doze", "treze", "quatorze", "quinze", "dezeseis", "dezesete", "dezoito", "dezenove"]
const dezenas = ["", "dez", "vinte", "trinta", "quarenta", "cinquenta", "sessenta", "setenta", "oitenta", "noventa"];
const centenas = ["", "cento", "duzentos", "trezentos", "quatrocentos", "quinhentos", "seiscentos", "setecentos", "oitocentos", "novecentos"]

function numbersToWords(numMin = 0, numMax = 1000) {
    if (numMax < numMin || numMax > 1000 || numMin < 0) {
        numMin = 0
        numMax = 1000
    }
    let numToExtenso = []
    for (let i = numMin; i <= numMax; i++) {
        let numToString = i.toString().split('') // array com arrays numero[i] dentro
            // console.log(numToString)

        if (numToString.length === 1) { // --------------------------------- 0 a 9
            let unidadesNum = numToString[0]
            numToExtenso.push(`${i} : ${unidades[unidadesNum]}`)
        } else if (numToString.length === 2) { // ---------------------------10 a 99
            let dezenasNum = numToString[0]
            let unidadesNum = numToString[1]
            if (dezenasNum === "1") {
                numToExtenso.push(`${i} : ${dezAdezenove[unidadesNum]}`)
            } else if (unidadesNum === "0") {
                numToExtenso.push(`${i} : ${dezenas[dezenasNum]}`)
            } else {
                numToExtenso.push(`${i} : ${dezenas[dezenasNum]} e ${unidades[unidadesNum]}`)
            }
        } else if (numToString.length === 3) { // --------------------------100 a 999
            let centenasNum = numToString[0]
            let dezenasNum = numToString[1]
            let unidadesNum = numToString[2]
            if (centenasNum === "1" && dezenasNum === "0" && unidadesNum === "0") {
                numToExtenso.push(`${i} : cem`)
            } else if (centenasNum !== "1" && dezenasNum === "0" && unidadesNum === "0") {
                numToExtenso.push(`${i} : ${centenas[centenasNum]}`)
            } else if (dezenasNum === "0") {
                numToExtenso.push(`${i} : ${centenas[centenasNum]} e ${unidades[unidadesNum]}`)
            } else if (dezenasNum === "1") {
                numToExtenso.push(`${i} : ${centenas[centenasNum]} e ${dezAdezenove[unidadesNum]}`)
            } else if (unidadesNum === "0") {
                numToExtenso.push(`${i} : ${centenas[centenasNum]} e ${dezenas[dezenasNum]}`)
            } else { numToExtenso.push(`${i} : ${centenas[centenasNum]} e ${dezenas[dezenasNum]} e ${unidades[unidadesNum]}`) }

        } else if (numToString.length === 4) { // ----------------------------1000
            numToExtenso.push(`${i} : mil`)
        }
    }
    return numToExtenso
}

console.log(numbersToWords(0, 20))
console.log(numbersToWords(0, 100))
console.log(numbersToWords(0, 1000))

function imprimeNumbersToWords() {

    let imprimeIndice = numbersToWords(0, 1000)
    for (let i = 0; i < imprimeIndice.length; i++) {
        let str = document.createElement('p')
        str.innerText = `${imprimeIndice[i]}`
        document.body.appendChild(str)
    }
}

imprimeNumbersToWords()