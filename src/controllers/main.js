//add bip
const codeBipInput = document.getElementById("add-bip");
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

    codeBip = codeBipInput.value || bipKeyInput.value;

    getResidueFromApi(codeBip);// save future in local storage

    /* const bipContainer = document.createElement('div');

    containerBips.appendChild(bipContainer)
    bipContainer.innerHTML += `<div class="bip-code">
                                <p>${codeBip}</p>    
                               </div>`; */

   /*  var factorial = function fac(n) { return n < 2 ? 1 : n * fac(n - 1) };

    print(factorial(3)); */

}

const cleanResidueFromData = () => {

    patron = "$";
    newValue = "";

    residue = residueFromData.replace(patron, newValue);

}

