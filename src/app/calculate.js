let tariffBip = "";
let codeBipSelect = "";

function getTariff(event) {

    tariffBip = event.target.value;

    return tariffBip;
}

function getBip(event) {

    codeBipSelect = event.target.value;

    return codeBipSelect;
}

const calculateTariff = () => {

    getBip;
    
   firebase.database().ref('userBips')
                       .orderByChild("bip/id").equalTo(codeBipSelect)
                       .limitToLast(1)
                       .once("child_added", (snapshot) => {
                            getBip = snapshot.val();
                           });
    

    /* .equalTo(codeBipSelect)
    .on("child_added", function(snapshot) {
        console.log(snapshot.key);
      }); */
}
/* 
firebase.database().ref('userBip/bip.val().codeBip')
    .isEqual(rootRef.child(codeBipSelect))
 */