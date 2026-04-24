const alturaTexto = prompt("Informe sua altura em metros (ex: 1.75):");
const pesoTexto = prompt("Informe seu peso em quilos (ex: 70):");

if (alturaTexto !== null && alturaTexto !== "" && pesoTexto !== null && pesoTexto !== "") {
    const altura = parseFloat(alturaTexto);
    const peso = parseFloat(pesoTexto);
    
    if (!isNaN(altura) && !isNaN(peso)) {
        console.log(altura);
        console.log(peso);
    } else {
        alert("Ops! Valores inválidos. Por favor, verifique e tente novamente.");
    }
} else {
    alert("Ops! Operação cancelada ou campos vazios.");
}