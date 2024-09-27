
export function suma(n1,n2){
    let resultado = n1+n2;
    return resultado;
}

export function resta(n1,n2){
    let resultado = n1-n2;
    return resultado;
}

export function mult(n1,n2){
    let resultado = n1*n2;
    return resultado;
}

export function div(n1,n2){
 if (n2===0) {
    return 'Error : Division por 0';
 } else {
    let resultado = n1/n2;
    return resultado;
 }
}