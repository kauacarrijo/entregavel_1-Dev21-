function Calculadora(num1, num2, ope) {
  num1 = Number(num1);
  num2 = Number(num2);
  let resultado;
  switch(ope){
    case "+":
      resultado = num1 + num2;
      break;
    case "-":
      resultado = num1 - num2;
      break;
    case "*":
      resultado = num1 * num2;
      break;
    case "/":
      resultado = num1 / num2;
      break;
    case "e":
      resultado = 1;
      for(let i = 0; i < num2; i++){
        resultado *= num1;
      }
      break;
  }
  if(resultado === undefined || resultado > 1000000){
    resultado = "ERRO";
  }
  
  return resultado;
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let visor = document.getElementById("visor");

function adicionar(tecla) {
  visor.value = visor.value + tecla;
}

function limpezatotal() {
  visor.value = "";
}

function calcular() {
  let numeros = visor.value.split(/[^0-9]/)
  let operadores = visor.value.split(/[0-9]/)
  let operador
  operadores.forEach(x => {
    if (x != "")
      operador = x
  });

  visor.value = Calculadora(numeros[0], numeros[1], operador)
}