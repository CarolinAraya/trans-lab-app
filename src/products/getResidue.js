const form = document.getElementById("get-residue-bip");
const bipKeyInput = document.getElementById("key-bip");
const responseContainer = document.getElementById("response-container");

let bipKeyInputValue;

userBip = {
    bip: null
}

getResidueSelect = () => {

    tariffBip = event.target.value;
    coincidedBip = null;

    firebase.database().ref('userBips')
        .orderByChild("bip/id").equalTo(tariffBip)
        .limitToLast(1)
        .once("child_added", (snapshot) => {

            console.log(snapshot.val());
            coincidedBip = snapshot.val();
            bipValue = coincidedBip.bip.saldoTarjeta;

            responseContainer.innerHTML = `<h1 class= "residue">${bipValue}</h1>`
        });
}

getResidue = () => {
    responseContainer.innerHTML = '';
    bipKeyInputValue = bipKeyInput.value;
    getResidueFromApi();
}

getResidueFromApi = () => {
    $.ajax({
        url: `http://bip-servicio.herokuapp.com/api/v1/solicitudes.json?bip=${bipKeyInputValue}`
    }).done(data => {
        userBip.bip = data;
        responseContainer.innerHTML = `<h1 class= "residue">${data.saldoTarjeta}</h1>`

        saveUserBip(userBip.bip);
    });
}


const saveUserBip = () => {
    const newBipKey = firebase.database()
        .ref().child('userBips')
        .push().key;//crea uno vacío para obtener la llave

    userBip.key = newBipKey;

    return firebase.database()
        .ref('userBips/' + newBipKey)
        .set(userBip); //set actualiza el valor en esta dirección
        

}