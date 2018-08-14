
//calculate tariff
passageContainer = document.getElementById("passage-container");
finalValueContainer = document.getElementById("final-value-container");
inputTariff = document.getElementById("input-tariff");
//get residue
const form = document.getElementById("get-residue-bip");
const bipKeyInput = document.getElementById("key-bip");
const responseContainer = document.getElementById("response-container");


residueFromData = "";

const getResidueInput = () => {

    bipGetResidue = bipKeyInput.value;

    getResidueFromApi(bipGetResidue);

    responseContainer.innerHTML = `<h1 class= "residue">${"$" + residueFromData}</h1>`;

}



