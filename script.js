//
//
const sumar = () => {

    document.getElementById("errorSegundoOperando").innerHTML = "";

    const primerOperando = document.getElementById("idPrimerOperando").value;
    const segundoOperando = parseInt(document.getElementById("idSegundoOperando").value);
    const resultado = parseInt(primerOperando) + parseInt(segundoOperando);
    document.getElementById("resultado").innerHTML = resultado.toString();
}

//
//
const restar = () => {

    document.getElementById("errorSegundoOperando").innerHTML = "";

    const primerOperando = document.getElementById("idPrimerOperando").value;
    const segundoOperando = parseInt(document.getElementById("idSegundoOperando").value);
    const resultado = parseInt(primerOperando) - parseInt(segundoOperando);

    document.getElementById("resultado").innerHTML = resultado.toString();
}

//
//
const multiplicar = () => {

    document.getElementById("errorSegundoOperando").innerHTML = "";

    const primerOperando = document.getElementById("idPrimerOperando").value;
    const segundoOperando = parseInt(document.getElementById("idSegundoOperando").value);
    const resultado = parseInt(primerOperando) * parseInt(segundoOperando);

    document.getElementById("resultado").innerHTML = resultado.toString();
}

//
//
const dividir = () => {

    const segundoOperando = parseInt(document.getElementById("idSegundoOperando").value);

    if (segundoOperando === 0) {
        document.getElementById("resultado").innerHTML = "";
        document.getElementById("errorSegundoOperando").innerHTML = "El segundo operando en la divisi&oacute;n no puede ser cero.";
    }
    else {
        const primerOperando = document.getElementById("idPrimerOperando").value;
        const resultado = parseInt(primerOperando) / parseInt(segundoOperando);
        document.getElementById("errorSegundoOperando").innerHTML = "";
        document.getElementById("resultado").innerHTML = resultado.toString();
    }
}
