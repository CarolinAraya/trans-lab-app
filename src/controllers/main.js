//add bip
const codeBipInput = document.getElementById("add-bip");
const containerBip = document.getElementById("containerBips");
const selectBipContainer = document.getElementById("userBipsSelect");
const getResidueSelect = document.getElementById("getResidueBipSelect");

//calculate tariff

passageContainer = document.getElementById("passage-container");
finalValueContainer = document.getElementById("final-value-container");

//get residue

const form = document.getElementById("get-residue-bip");
const bipKeyInput = document.getElementById("key-bip");
const responseContainer = document.getElementById("response-container");


var residueBip = "";

const addBip = () => {
    
    codeBip = codeBipInput.value;

    getResidueFromApi(codeBip);// save future in local storage
}