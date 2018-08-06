const form = document.getElementById("get-residue-bip");
const bipKeyInput = document.getElementById("key-bip");
const responseContainer = document.getElementById("response-container");
let bipKeyInputValue;

userBip = {
    bip: null
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
        responseContainer.innerHTML= `<h1 class= "residue">${data.saldoTarjeta}</h1>`
    });

}

