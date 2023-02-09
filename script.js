let textArea = document.querySelector(".text-area");
let mensaje = document.querySelector(".mensaje");
let copia = document.querySelector(".btn-copiar");
copia.style.display = "none"


function validarTexto(){
    let textoEscrito = document.querySelector(".text-area").value;
    let validador =textoEscrito.match(/^[a-z\s]+$/);

    if(!validador) {
        alert("El campo tiene letras mayúsculas o con acentos, o está vacio!!")
        //location.reload();
        return true;
    }
}

function btnEncriptar(){
    if(!validarTexto()) {
    let textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = ""
    mensaje.style.backgroundImage = "none";
    copia.style.display = "block"
    }
}

function encriptar(stringEncriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return stringEncriptada
}

function btnDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = ""
    copia.style.display = "block"
}

function desencriptar(stringDesencriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }
    return stringDesencriptada
}

function copiar(){
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value)
    mensaje.value = "";
    //alert("Texto Copiado")
}

