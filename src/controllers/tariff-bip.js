let tariffBip = "";
let codeBipSelect = "";

const tariffInput = () => {

    bipCalculateTariff = inputTariff.value;

    getResidueFromApi(bipCalculateTariff);

    let totalBalance = balanceFinal - tariffBip;

    finalValueContainer.innerHTML = `<p class= "residue">${"$" + totalBalance}</p>`
    return totalBalance;

}

function getTariff(event) {

    tariffBip = event.target.value;

    passageContainer.innerHTML = `<div class= "residue">${"$" + tariffBip}</div>`;

    return tariffBip;
}