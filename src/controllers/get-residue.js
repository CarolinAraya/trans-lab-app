
const getResidueInput = () => {

    bipGetResidue = bipKeyInput.value;

    getBipAmountFromApi(bipGetResidue, (amount) => {

        responseContainer.innerHTML = `<h1 class= "residue">${"$" + amount}</h1>`;
    });
}



