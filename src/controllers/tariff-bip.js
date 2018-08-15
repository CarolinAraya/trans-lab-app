//calculate tariff
passageContainer = document.getElementById("passage-container");
finalValueContainer = document.getElementById("final-value-container");
inputTariff = document.getElementById("input-tariff");

let tariffBip = "";
let codeBipSelect = "";
residueFromData = "";


const tariffInput = () => {

    bipCalculateTariff = inputTariff.value;

    getResidueFromApi(bipCalculateTariff);

    if (residueFromData) {

        printTotal(residueFromData); 

    }
}

const printTotal = (residue) => {


    let totalBalance = residue - tariffBip;

    finalValueContainer.innerHTML = `<p class= "residue">${"$" + totalBalance}</p>`
    return totalBalance;


}

function getTariff(event) {

    tariffBip = event.target.value;

    passageContainer.innerHTML = `<div class= "residue">${"$" + tariffBip}</div>`;

    return tariffBip;
}