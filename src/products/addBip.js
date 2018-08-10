const codeBipInput = document.getElementById("add-bip");
const addBipButton = document.getElementById("button-add-bip");
const containerBip = document.getElementById("containerBips");
const selectBipContainer = document.getElementById("userBipsSelect");

let codeBip;

const myBip = {
    codeBip: null,
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

firebase.database().ref('idBips')
    .on('child_added', (newBip) => {
        const bipContainer = document.createElement('div');
        containerBips.appendChild(bipContainer)
        bipContainer.innerHTML += `<div class="bip-code">
                                <p>${newBip.val().codeBip}</p>    
                               </div>`; 
        selectBipContainer.innerHTML += `<option value="${newBip.val().codeBip}">${newBip.val().codeBip}</option>`
    });