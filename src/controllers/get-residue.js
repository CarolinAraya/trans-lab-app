//get residue
const form = document.getElementById("get-residue-bip");
const bipKeyInput = document.getElementById("key-bip");
const responseContainer = document.getElementById("response-container");


const getResidueInput = () => {

    bipGetResidue = bipKeyInput.value;

    getBipAmountFromApi(bipGetResidue, (amount) => {

        responseContainer.innerHTML = `<h1 class= "residue">${"$" + amount}</h1>`;
    });
}



