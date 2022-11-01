function verificarcaracter(cadena) {
    let largo = cadena.length;
    let encadena = [];
    for (let i = 0; i < largo; i++) {
        encadena[i] = cadena.charAt(i);
    }
    let valor = encadena.indexOf('@');
    if (valor != -1) {
        alert("El email ingresado es valido");
    } else {
        alert("El mail ingresado no es valido");
    }

}