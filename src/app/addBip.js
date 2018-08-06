const codeBipInput = document.getElementById("add-bip");
const addBipButton = document.getElementById("button-add-bip");

let codeBip;

const myBip = {
    codeBip : null,
    key: null
}

const addBip = () => {
    codeBip = codeBipInput.value;
    myBip.codeBip = codeBip;
    saveBipFirebase(myBip);
}

const saveBipFirebase = () => {
    const newBipKey = firebase.database()
        .ref().child('idBips')
        .push().key;//crea uno vacío para obtener la llave

        myBip.key = newBipKey;

    return firebase.database()
        .ref('idBips/' + newBipKey)
        .set(myBip); //set actualiza el valor en esta dirección
}