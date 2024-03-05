let texto = "";
let textEncrypt = "";
let textDecrypt = ""
const rulesList = ["ai", "enter", "imes", "ober", "ufat"];
//ai-a -0; enter-e-1; imes-i-2; ober-o-3; ufat-u-4

enableButton();
console.log("SE HA LEIDO");
let textarea = document.getElementById('textoInicial');
textarea.addEventListener('input', enableButton);

function encrypt() {
    textEncrypt = "";
    texto = document.getElementById('textoInicial').value;

    for (let i = 0; i < texto.length; i++) {
        textEncrypt = textEncrypt + rulesToEncrypt(texto[i]);
    }
    document.getElementById('textoEncriptado').value = textEncrypt;

    console.log(textEncrypt);
}

function decrypt() {
    textDecrypt = "";
    textEncrypt = "";
    textEncrypt = document.getElementById('textoInicial').value;
    textDecrypt = textEncrypt.replace(/ai/g, "a");
    textDecrypt = textDecrypt.replace(/enter/g, "e");
    textDecrypt = textDecrypt.replace(/imes/g, "i");
    textDecrypt = textDecrypt.replace(/ober/g, "o");
    textDecrypt = textDecrypt.replace(/ufat/g, "u");
    document.getElementById('textoEncriptado').value = textDecrypt;
    console.log(textDecrypt);
}

function rulesToEncrypt(caracter) {
    if (caracter == 'a')
        return rulesList[0];
    else if(caracter == 'e')
        return rulesList[1];
    else if (caracter == 'i')
        return rulesList[2];
    else if (caracter == 'o')
        return rulesList[3];
    else if (caracter == 'u')
        return rulesList[4];
    
    return caracter;
}

async function copyText() {
    let textoCopiado = document.getElementById('textoEncriptado').value;
    try {
        const e = await navigator.clipboard.writeText(textoCopiado);
        console.log(e);
    } catch (error) {
        console.error("Error al intentar copiar al portapales", error);
    }
}

function enableButton() {
    let textArea;
    let buttonToCopy;
    let texto = document.getElementById('textoInicial').value
    if (texto.length > 0){
        changeEstateButton('botonDesencriptar', false, 'white');
        changeEstateButton('botonEncriptar', false, '#122562')
        changeVisibility('message', 'none');
        changeVisibility('textoEncriptado', 'block');
        changeVisibility('buttonToCopy', 'block');

        console.log("SE HABILITO");
    }
    if (texto.length == 0){
        changeEstateButton('botonDesencriptar', true, '#9b9b9b');
        changeEstateButton('botonEncriptar', true, '#9b9b9b');
        changeVisibility('textoEncriptado', 'none');
        changeVisibility('buttonToCopy', 'none');
        changeVisibility('message', 'block')
        console.log("SE DESHABILITO");
    }
}

function changeEstateButton(id, state, color) {
    document.getElementById(id).disabled = state;
    document.getElementById(id).style.backgroundColor = color;
}

function changeVisibility(id, display) {
    document.getElementById(id).style.display = display;
}