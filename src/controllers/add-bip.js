//add bip
const codeBipInput = document.getElementById("add-bip");
const selectBipContainer = document.getElementById("userBipsSelect");

let residue = "";

const myBip = {
    codeBip: null,
    key: null
};

const addBip = () => {

    codeInput = codeBipInput.value;

    myBip.codeBip = codeInput;

    saveBipFirebase(myBip);
}





    //  var factorial = function fac(n) { return n < 2 ? 1 : n * fac(n - 1) };

    //print(factorial(3)); */