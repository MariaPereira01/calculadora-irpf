function calcular() {

    let salario = parseFloat(document.getElementById("salario").value);

    if(isNaN(salario) || salario <= 0){
        limpar();
        return;
    }

    let imposto = calcularImposto(salario);

    let aliquota = calcularAliquota(salario, imposto);

    document.getElementById("imposto").innerText = imposto.toFixed(2);

    document.getElementById("aliquota").innerText = aliquota.toFixed(2) + "%";

}

function limpar(){

    document.getElementById("salario").value = "";
    document.getElementById("imposto").innerText = "0.00";
    document.getElementById("aliquota").innerText = "0%";

}

function calcularAliquota(salario, imposto){

    if(salario == 0){
        return 0;
    }

    return (imposto / salario) * 100;

}

function calcularImposto(salario){

    return faixaIsenta1(salario) +
           faixa2(salario) +
           faixa3(salario) +
           faixa4(salario) +
           faixa5(salario);
}

function faixaIsenta1(salario){
    return 0;
}

function faixa2(salario){

    if(salario <= 2259.20){
        return 0;
    }

    let base = Math.min(salario, 2826.65) - 2259.20;

    return base * 0.075;

}

function faixa3(salario){

    if(salario <= 2826.65){
        return 0;
    }

    let base = Math.min(salario, 3751.05) - 2826.65;

    return base * 0.15;

}

function faixa4(salario){

    if(salario <= 3751.05){
        return 0;
    }

    let base = Math.min(salario, 4664.68) - 3751.05;

    return base * 0.225;

}

function faixa5(salario){

    if(salario <= 4664.68){
        return 0;
    }

    let base = salario - 4664.68;

    return base * 0.275;

}