
const tariffCalculationClick = () => {

    let bipCard = inputCode.value;
    let tariff = selectTariff.value;

    if (tariff > 0 && bipCard > 0) {

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

const tariffSelectionChanged = (event) => {

    let bipCard = userBipsSelect.value;
    let tariff = event.target.value;

    if (tariff > 0 && bipCard > 0) {

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

const userBipsSelectionChanged = (event) => {

    let bipCard = event.target.value;
    let tariff = selectTariff.value;

    if (tariff > 0 && bipCard > 0) {

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