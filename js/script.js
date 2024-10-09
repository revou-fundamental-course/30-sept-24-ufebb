// Fungsi untuk mengonversi Celsius ke Fahrenheit
function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

// Fungsi untuk mengonversi Fahrenheit ke Celsius
function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}

// Event ketika tombol 'Konversi' diklik
document.getElementById('konversi').addEventListener('click', function() {
    let celsiusInput = document.getElementById('celsius').value;

    if (celsiusInput === '') {
        alert('Masukkan nilai suhu dalam Celsius.');
        return;
    }

    let celsius = parseFloat(celsiusInput);
    let fahrenheit = celsiusToFahrenheit(celsius);

    // Tampilkan hasil konversi dan cara perhitungan
    document.getElementById('hasil').textContent = `${celsius}°C = ${fahrenheit.toFixed(2)}°F`;
    document.getElementById('cara-kalkulasi').textContent = `${celsius}°C × 9/5 + 32 = ${fahrenheit.toFixed(2)}°F`;

    // Tampilkan di input Fahrenheit
    document.getElementById('fahrenheit').value = fahrenheit.toFixed(2);
});

// Event untuk tombol 'Reset'
document.getElementById('reset').addEventListener('click', function() {
    document.getElementById('celsius').value = '';
    document.getElementById('fahrenheit').value = '';
    document.getElementById('hasil').textContent = '';
    document.getElementById('cara-kalkulasi').textContent = '';
});

// Event untuk tombol 'Reverse' (Fahrenheit ke Celsius)
document.getElementById('reverse').addEventListener('click', function() {
    let fahrenheitInput = document.getElementById('fahrenheit').value;

    if (fahrenheitInput === '') {
        alert('Masukkan nilai suhu dalam Fahrenheit.');
        return;
    }

    let fahrenheit = parseFloat(fahrenheitInput);
    let celsius = fahrenheitToCelsius(fahrenheit);

    // Tampilkan hasil konversi dan cara perhitungan
    document.getElementById('hasil').textContent = `${fahrenheit}°F = ${celsius.toFixed(2)}°C`;
    document.getElementById('cara-kalkulasi').textContent = `(${fahrenheit}°F - 32) × 5/9 = ${celsius.toFixed(2)}°C`;

    // Tampilkan di input Celsius
    document.getElementById('celsius').value = celsius.toFixed(2);
});