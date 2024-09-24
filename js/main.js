import { div, mult, resta, suma } from "./operador";

function calcularResultado(){
    let numero1 = document.querySelector("#numero1").value;
    let operador = document.querySelector("#operador").value;
    let numero2 = document.querySelector("#numero2").value;
    let resultado;
    console.log(numero1);
    console.log(operador);
    console.log(numero2);
    if(numero1!==null && numero2!==null){
        if(operador==="suma"){
            resultado=suma(numero1,numero2);
            document.querySelector("#resultado").innerHTML=resultado;
        }else if(operador==="resta"){
            resultado = resta(numero1,numero2);
            document.querySelector("#resultado").innerHTML=resultado;
        }else if(operador==="mult"){
            resultado = mult(numero1,numero2);
            document.querySelector("#resultado").innerHTML=resultado;
        }else if(operador==="div"){
            resultado = div(numero1,numero2);
            document.querySelector("#resultado").innerHTML=resultado;
        }else{
             alert("No has elegido ningun operador");  
        }
        
    }else{
        alert("Algun numero es nulo, por favor elige algun numero");
    }
    
}