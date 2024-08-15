
let temperatureInput = document.getElementById('temp');
let inputUnitSelect = document.getElementById('_inputunit');
let outputUnitSelect = document.getElementById('_outputunit');
let convertBtn = document.getElementById('_convertbtn');
let outputDisplay = document.getElementById('output');

convertBtn.addEventListener('click', convertTemp);

function convertTemp() {
    const temp = parseFloat(temperatureInput.value);
    const inputUnit = inputUnitSelect.value;
    const outputUnit = outputUnitSelect.value;

    let convertedTemp;


    if (inputUnit === 'Celsius') {
        if (outputUnit === 'Fahrenheit') {
            convertedTemp = (temp * 9 / 5) + 32;
        }
        else if (outputUnit === 'Kelvin') {
            convertedTemp = temp + 273.15;
        }
        else {
            convertedTemp = temp;
        }
    }
    else if (inputUnit === 'Fahrenheit') {
        if (outputUnit === 'Celsius') {
            convertedTemp = (temp - 32) * 5 / 9;
        }
        else if (outputUnit === 'Kelvin') {
            convertedTemp = ((temp - 32) * 5 / 9) + 273.15;
        }
        else {
            convertedTemp = temp;
        }
    }
    else if (inputUnit === 'Kelvin') {
        if (outputUnit === 'Celsius') {
            convertedTemp = temp - 273.15;
        }
        else if (outputUnit === 'Fahrenheit') {
            convertedTemp = ((temp - 273.15) * 9 / 5) + 32;
        }
        else {
            convertedTemp = temp;
        }
    }

    outputDisplay.innerText = `${convertedTemp} ${outputUnit}`;
}
