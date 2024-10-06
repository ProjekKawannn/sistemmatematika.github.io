function algebraOperation() {
    const num1 = parseFloat(document.getElementById('algebra-num1').value);
    const num2 = parseFloat(document.getElementById('algebra-num2').value);
    const operation = document.getElementById('algebra-operation').value;

    let result;
    switch (operation) {
        case 'add':
            result = num1 + num2;
            break;
        case 'subtract':
            result = num1 - num2;
            break;
        case 'multiply':
            result = num1 * num2;
            break;
        case 'divide':
            result = num1 / num2;
            break;
        default:
            result = 'Operasi tidak valid';
    }

    document.getElementById('algebra-result').innerHTML = `Hasil: ${result}`;
}

function calculateArea() {
    const radius = parseFloat(document.getElementById('radius').value);
    const area = Math.PI * radius * radius;
    document.getElementById('geometry-result').innerHTML = `Luas Lingkaran: ${area.toFixed(2)}`;
}

function calculateDerivative() {
    const x = parseFloat(document.getElementById('calculus-num').value);
    const derivative = 2 * x;
    document.getElementById('calculus-result').innerHTML = `Turunan f(x)=x²: ${derivative}`;
}

function calculateMean() {
    const dataSet = document.getElementById('data-set').value.split(',');
    const sum = dataSet.reduce((acc, current) => acc + parseFloat(current), 0);
    const mean = sum / dataSet.length;
    document.getElementById('statistics-result').innerHTML = `Rata-rata: ${mean.toFixed(2)}`;
}

function calculateTrigonometry() {
    const angle = parseFloat(document.getElementById('trigonometry-num').value);
    const operation = document.getElementById('trigonometry-operation').value;

    let result;
    switch (operation) {
        case 'sin':
            result = Math.sin(angle * Math.PI / 180);
            break;
        case 'cos':
            result = Math.cos(angle * Math.PI / 180);
            break;
        case 'tan':
            result = Math.tan(angle * Math.PI / 180);
            break;
        default:
            result = 'Operasi tidak valid';
    }

    document.getElementById('trigonometry-result').innerHTML = `Hasil: ${result.toFixed(2)}`;
}

function calculateEconomics() {
    const initialPrice = parseFloat(document.getElementById('economics-num1').value);
    const finalPrice = parseFloat(document.getElementById('economics-num2').value);
    const percentageChange = ((finalPrice - initialPrice) / initialPrice) * 100;
    document.getElementById('economics-result').innerHTML = `Persentase Perubahan: ${percentageChange.toFixed(2)}%`;
}