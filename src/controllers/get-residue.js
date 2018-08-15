
const getAmountBipClick = () => {

    let bipCard = bipCodeInput.value;

    if (bipCard > 0) {

        getBipAmountFromApi(bipCard, (amount) => {

            responseContainer.innerHTML = `<h1 class= "residue">${"$" + amount}</h1>`;
        });
    }
    else {
        responseContainer.innerHTML = "";
    }

}

const bipAmountSelectionChanged = () => {

    let bipCard = getAmountBipSelect.value;

    if ( bipCard > 0 ) {

        bipCodeInput.value = bipCard;

        getAmountBipClick();

    }
}


