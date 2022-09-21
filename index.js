// colocar numero
// clicar no botao
// pegar o valor do numero 
// converter 

let numeroInput = document.getElementById("number")
const btnEl = document.getElementById("btn-el")
const lengthEl = document.getElementById("length-info-el")
const volumeEl = document.getElementById("volume-info-el")
const massEl = document.getElementById("mass-info-el")

btnEl.addEventListener("click", function(){
    let meterFeet = numeroInput.value * 3.281
    let Feetmeter = numeroInput.value * 0.3048
    let value1 = numeroInput.value
    lengthEl.innerHTML = `${value1} meters = ${Math.round(meterFeet *100)/100} feet | ${value1} feet = ${Math.round(Feetmeter *100)/100} meters`

    let literGallon = numeroInput.value * 0.264
    let gallonLiter = numeroInput.value * 4.54609
    let value2 = numeroInput.value
    volumeEl.innerHTML = `${value2} liters = ${Math.round(literGallon *100)/100} gallons | ${value2} gallons = ${Math.round(gallonLiter *100)/100} liters`

    let kiloPound = numeroInput.value * 2.204
    let poundKilo = numeroInput.value * 0.453592
    let value3 = numeroInput.value
    massEl.innerHTML = `${value3} kilos = ${Math.round(kiloPound *100)/100} pounds | ${value3} pounds = ${Math.round(poundKilo *100)/100} kilos`
    
})

