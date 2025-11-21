function clickar(num){
    var numero = document.getElementById("calculo").innerHTML;
    document.getElementById('calculo').innerHTML = numero + num;

}

function apagar(){
    document.getElementById("calculo").innerHTML = " ";
}

function voltar(){
    var resultado = document.getElementById('calculo').innerHTML;
    document.getElementById('calculo').innerHTML = resultado.substring(0, resultado.length -1)
}

function calcular(){
    var resultado = document.getElementById("calculo").innerHTML;

    if(resultado){
        document.getElementById('calculo').innerHTML = eval(resultado)
    }

}

