function encriptar() {
    var texto= document.getElementById("imput_codificar").value.toLowerCase();
    var texCifrado = texto.replace(/e/igm,"enter");
    var texCifrado = texCifrado.replace(/o/igm,"ober");
    var texCifrado = texCifrado.replace(/i/igm,"imes");
    var texCifrado = texCifrado.replace(/a/igm,"ai");
    var texCifrado = texCifrado.replace(/u/igm,"ufat");


    document.getElementById("copy").style.display= "show";
    document.getElementById("copy").style.display= "inherit";
    document.getElementById("imput_decodificado").style.display= "show";
    document.getElementById("mensaje2").style.display= "show";
    document.getElementById("imput_decodificado").innerHTML= texCifrado;




    
}

function desencriptar() {
    var texto= document.getElementById("imput_codificar").value.toLowerCase();
    var texCifrado = texto.replace(/enter/igm,"e");
    var texCifrado = texCifrado.replace(/ober/igm,"o");
    var texCifrado = texCifrado.replace(/imes/igm,"i");
    var texCifrado = texCifrado.replace(/ai/igm,"a");
    var texCifrado = texCifrado.replace(/ufat/igm,"u");

    document.getElementById("imput_decodificado").innerHTML= texCifrado; 


    
}

function copiar() {
    let contenido = document.getElementById("imput_decodificado").value;
    navigator.clipboard.writeText(contenido)
    document.getElementById("imput_decodificado").innerHTML= "Mensaje copiado";

    
}