//FUNZIONE CHE GENERA UN NUMERO RANDOMICO A SECONDA DAI PARAMETRI DI RANGE DATI IN INPUT
function getRandomNumber(startNum, endNum) {
    const randomNum = Math.floor(Math.random() * (endNum + 1 - startNum)) + startNum
    return randomNum
}


//FUNZIONE PER IL CONTROLLO DI UN NUMERO DATO IN INPUT SE PARI O DISPARI
//RESTITUISCE "TRUE" QUANDO IL NUMERO E' PARI, "FALSE" SE DISPARI
function isEvenOrOdd(num) {
    let check = false
    if (num % 2 === 0) {

        return check = true
    }

    return check = false
}



//CHIEDO ALL'USER DI SCEGLIERE PARI O DISPARI E REGISTRO IN UNA VARIABILE LA SCELTA CHE SARA' INIZIALIZZATA COME STRINGA VUOTA
//VADO AD ASSICURARMI CHE L'USER FACCIA UNA SCELTA POSSIBILE CONTROLLANDOLA CON UN CICLO DO-WHILE
//CHE SI RIPETERA' FINCHE L'USER NON SCEGLIERA' "P" O "D"
let userChoice = ""
let correctChoice = false
do {
    userChoice = prompt("Scegli 'P' per pari o 'D' dispari")
    userChoice = userChoice.toUpperCase()
    if (userChoice === "P" || userChoice === "D") {
        correctChoice = true
    }
} while (correctChoice === false)

//CHIEDO ALL'USER DI INSERIRE UN NUMERO COMPRESO TRA 1 E 5 INCLUSI E REGISTRO IN UNA VARIABILE LA SCELTA
//IMPOSTO UN CICLO DI CONTROLLO SUL NUMERO INSERITO AFFINCHE' SIA EFFETTUATA UNA SCELTA POSSIBILE (1-5)
let userNum = 0
let correctNum = false
do {
    userNum = Number(prompt("Inserisci un numero da 1 a 5"))
    if (userNum > 0 && userNum <= 5) {
        correctNum = true
    }
} while (correctNum === false)
console.log(userNum, correctNum)

//RICHIAMO LA FUNZIONE PER GENERARE UN NUMERO CASUALE IMPOSTANDOGLI COME RANGE (1-5) 
//E SALVO IL RISULTATO IN UNA VARIABILE
const cpuNum = getRandomNumber(1, 5)
alert(`Il computer ha ottenuto un ${cpuNum}`)
//SOMMO IL NUMERO INSERITO DALL'USER CON QUELLO OTTENUTO CASUALMENTE
const sum = userNum + cpuNum 
alert(`La somma è: ${sum}`)

//RICHIAMO LA FUNZIONE CHE VERIFICHI SE PARI O DISPARI IL NUMERO OTTENUTO DALLA SOMMA
const EvenOdd = isEvenOrOdd(sum)

//CONTROLLO DEL RISULTATO E OUTPUT DEL VINCITORE 
if (EvenOdd === true && userChoice === "P") {
    alert("Complimenti la somma è pari: HAI VINTO!")
} else if (EvenOdd === false && userChoice === "D") {
    alert("Complimenti la somma è dispari: HAI VINTO!")
} else {
    alert("HAI PERSO")
}