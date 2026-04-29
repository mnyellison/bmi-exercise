// classificação da tabela
function classificacaoIMC(imc) {
    if (imc < 18.5) {
        console.log(`${imc.toFixed(1)} - Abaixo do peso`);
    } else if (imc >= 18.5 && imc <= 24.9) {
        console.log(`${imc.toFixed(1)} - Peso normal`);
    } else if (imc >= 25.0 && imc <= 29.9) {
        console.log(`${imc.toFixed(1)} - Sobrepeso`);
    } else if (imc >= 30.0 && imc <= 34.9) {
        console.log(`${imc.toFixed(1)} - Obesidade Grau I`);
    } else {
        console.log(`${imc.toFixed(1)} - Obesidade Severa/Mórbida`);
    }
}

// entrada de dados
const alturaTexto = prompt("Informe sua altura em metros (ex: 1.75):");
const pesoTexto = prompt("Informe seu peso em quilos (ex: 70):");

// validando se cancelou ou deixou vazio
if (alturaTexto !== null && alturaTexto !== "" && pesoTexto !== null && pesoTexto !== "") {
    // convertendo para número
    const altura = parseFloat(alturaTexto);
    const peso = parseFloat(pesoTexto);

    // verificando se a conversão é um número válido
    if (!isNaN(altura) && !isNaN(peso)) {
        // cálculo do IMC
        const imc = peso / (altura ** 2);

        // verificando se os valores são maiores do que zero
        if ((altura > 0) && (peso > 0)) {
            console.log(`Altura: ${altura}`);
            console.log(`Peso: ${peso}`)

            // passando as informações para a função
            classificacaoIMC(imc);
        } else {
            alert("Os valores precisam ser maiores do que zero.");
        }
    } else {
        alert("Valores inválidos. Por favor, verifique e tente novamente.");
    }
} else {
    alert("Operação cancelada ou campos vazios.");
}