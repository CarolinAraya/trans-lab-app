const form = document.getElementById("get-residue-bip");
const bipKeyInput = document.getElementById("key-bip");
const responseContainer = document.getElementById("response-container");
let bipKeyInputValue;

form.addEventListener('submit', (e) => {
    e.preventDefault();
    responseContainer.innerHTML = '';
    bipKeyInputValue = bipKeyForGetResidue.value;
    getResidueFromApi();
});

getResidueFromApi = () => {
    const residueBipRequest = new XMLHttpRequest();
    residueBipRequest.open('GET', `http://bip-servicio.herokuapp.com/api/v1/solicitudes.json?bip=${bipKeyInputValue}`);
}

