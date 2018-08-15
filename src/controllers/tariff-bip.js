tariffBip = "";

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

}

const userBipsSelectionChanged = (event) => {

    let bipCard = event.target.value;
    let tariff = selectTariff.value;

    if (bipCard > 0 && tariff > 0) {

        passageContainer.innerHTML = `<div class= "residue">${"$" + tariff}</div>`;

        getBipAmountFromApi(bipCard, (amount) => {


            finalValueContainer.innerHTML = `<p class= "residue">${"$" + (amount - (tariff))}</p>`

        });
    }
    else {

        passageContainer.innerHTML = "";
        finalValueContainer.innerHTML = "";
    }

}