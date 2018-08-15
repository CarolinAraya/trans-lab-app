//calculate tariff
passageContainer = document.getElementById("passage-container");
finalValueContainer = document.getElementById("final-value-container");
inputCode = document.getElementById("input-code");
selectTariff = document.getElementById("tariff");


const tariffInput = () => {

    bipCalculateTariff = inputCode.value;

    getBipAmountFromApi(bipCalculateTariff, (amount) => {

        let tariff = selectTariff.value;

        finalValueContainer.innerHTML = `<p class= "residue">${"$" + (amount - (tariff))}</p>`

    });
}

function getTariff(event) {

    tariffBip = event.target.value;

    passageContainer.innerHTML = `<div class= "residue">${"$" + tariffBip}</div>`;

    return tariffBip;
}