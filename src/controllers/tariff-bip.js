
const tariffInput = () => {

    bipCalculateTariff = inputCode.value;

    getBipAmountFromApi(bipCalculateTariff, (amount) => {

        let tariff = selectTariff.value;

        finalValueContainer.innerHTML = `<p class= "residue">${"$" + (amount - (tariff))}</p>`

    });
}

function printTariff(event) {

    tariffBip = event.target.value;

    passageContainer.innerHTML = `<div class= "residue">${"$" + tariffBip}</div>`;

    return tariffBip;
}