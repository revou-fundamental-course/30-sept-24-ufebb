function convertToFahrenheit() {
    const celsius = parseFloat(document.getElementById('celcius').value);
    if (!isNaN(celsius)) {
        const fahrenheit = (celsius * 9/5) + 32;
        document.getElementById('hasil').value = fahrenheit.toFixed(2) + ' °F';
        document.getElementById('calculation').value = `${celsius} °C x 9/5 + 32 = ${fahrenheit.toFixed(2)} °F`;
    } else {
        alert("Masukkan nilai Celsius yang valid!");
    }
}

function convertToCelsius() {
    const fahrenheit = parseFloat(document.getElementById('hasil').value);
    if (!isNaN(fahrenheit)) {
        const celsius = (fahrenheit - 32) * 5/9;
        document.getElementById('hasil').value = celsius.toFixed(2) + ' °C';
        document.getElementById('calculation').value = `${fahrenheit} °F - 32 x 5/9 = ${celsius.toFixed(2)} °C`;
    } else {
        alert("Masukkan nilai Fahrenheit yang valid!");
    }
}

function resetFields() {
    document.getElementById('celcius').value = '';
    document.getElementById('hasil').value = '';
    document.getElementById('calculation').value = '';
}