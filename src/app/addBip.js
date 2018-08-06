const codeBipInput = document.getElementById("add-bip");
const addBipButton = document.getElementById("button-add-bip");
const containerBip = document.getElementById("containerBips");

let codeBip;

const myBip = {
    codeBip: null,
    key: null
}

const addBip = () => {
    codeBip = codeBipInput.value;
    myBip.codeBip = codeBip;
    saveBipFirebase(myBip);
    const bipContainer = document.createElement('div');
    containerBips.appendChild(bipContainer)
    bipContainer.innerHTML += `<div class="bip-code">
                                <p>${myBip.codeBip}</p>    
                               </div>`
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

firebase.database().ref('idBips')
    .on('child_added', (newBip) => {
        const bipContainer = document.createElement('div');
        containerBips.appendChild(bipContainer)
        bipContainer.innerHTML += `<div class="bip-code">
                                <p>${newBip.val().codeBip}</p>    
                               </div>`
    });