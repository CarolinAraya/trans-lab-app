//add bip
const codeBipInput = document.getElementById("add-bip");
const selectBipContainer = document.getElementById("userBipsSelect");

let residue = "";
let residueFromData = "";

const myBip = {
    codeBip: null,
    key: null
};

const addBip = () => {//Agrega id tarjeta y guarda en Firebase

    codeInput = codeBipInput.value;

    myBip.codeBip = codeInput;

    const bipContainer = document.createElement('div');

    containerBips.appendChild(bipContainer)
    bipContainer.innerHTML += `<div class="bip-code">
                                <p>${codeInput}</p>    
                               </div>`; 

    saveBipFirebase(myBip);

}



    //  var factorial = function fac(n) { return n < 2 ? 1 : n * fac(n - 1) };

    //print(factorial(3)); */