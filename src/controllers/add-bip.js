//add bip
const codeBipInput = document.getElementById("add-bip");

const myBip = {
    codeBip: null,
    key: null
};

const addBip = () => {

    codeInput = codeBipInput.value;

    myBip.codeBip = codeInput;

    saveBipFirebase(myBip);
}

