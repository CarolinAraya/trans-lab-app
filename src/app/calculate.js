passageContainer = document.getElementById("passage-container");
finalValueContainer = document.getElementById("final-value-container");

let tariffBip = "";
let codeBipSelect = "";

function getTariff(event) {

    tariffBip = event.target.value;

    passageContainer.innerHTML = `<div class= "residue">${"$" + tariffBip}</div>`;

    return tariffBip;
}

function getBip(event) {

    codeBipSelect = event.target.value;

    return codeBipSelect;
}

const calculateTariff = () => {

    coincidedBip = null;

    firebase.database().ref('userBips')
        .orderByChild("bip/id").equalTo(codeBipSelect)
        .limitToLast(1)
        .once("child_added", (snapshot) => {

            console.log(snapshot.val());
            coincidedBip = snapshot.val();

            bipValue = coincidedBip.bip.saldoTarjeta;
            patron = "$";
            nuevovalor = "";
            balance = bipValue.replace(patron, nuevovalor);
            console.log(balance);
            patron = ".";
            nuevovalor = "";
            balanceFinal = balance.replace(patron, nuevovalor);

            totalBalance = balanceFinal - tariffBip;

            finalValueContainer.innerHTML = `<div class= "residue">${"$" + totalBalance}</div>`
            return totalBalance;

        });


}