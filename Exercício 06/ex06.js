function pegarValores() {
    let n1 = Number(document.getElementById("num1").value);
    let n2 = Number(document.getElementById("num2").value);
    return { n1, n2};
}

function somar() {
    let valores = pegarValores();
    document.getElementById("resultado").innerHTML = "Resultado: " + (valores.n1 + valores.n2);
}

function subtrair() {
    let valores = pegarValores();
    document.getElementById("resultado").innerHTML = "Resultado: " + (valores.n1 - valores.n2);
}

function multiplicar() {
    let valores = pegarValores();
    document.getElementById("resultado").innerHTML = "Resultado: " + (valores.n1 * valores.n2);
}

function dividir() {
    let valores = pegarValores();
    if (valores.n2 === 0) {
        document.getElementById("resultado").innerHTML = "Erro: Divisão por zero não é permitida.";
    } else {
        document.getElementById("resultado").innerHTML = "Resultado: " + (valores.n1 / valores.n2);
    }
}