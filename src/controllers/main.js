//add bip
const codeBipInput = document.getElementById("add-bip");
const containerBip = document.getElementById("containerBips");
const selectBipContainer = document.getElementById("userBipsSelect");

//calculate tariff
passageContainer = document.getElementById("passage-container");
finalValueContainer = document.getElementById("final-value-container");
//get residue
const form = document.getElementById("get-residue-bip");
const bipKeyInput = document.getElementById("key-bip");
const responseContainer = document.getElementById("response-container");


let residue = "";
let residueFromData = "";

const addBip = () => {

    codeBip = codeBipInput.value;

    getResidueFromApi(codeBip);// save future in local storage


}

const cleanResidueFromData = () => {

    patron = "$";
    newValue = "";
    
    residue = residueFromData.replace(patron, newValue);

    domFunction(residue);
}

const domFunction = () => {

    responseContainer.innerHTML = `<h1 class= "residue">${data.saldoTarjeta}</h1>`

}