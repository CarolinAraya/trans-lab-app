

getResidueFromApi = (codeBip) => {
    $.ajax({
        url: `http://bip-servicio.herokuapp.com/api/v1/solicitudes.json?bip=${codeBip}`
    }).done(data => {
        residueFromData = data.saldoTarjeta;
       
       cleanResidueFromData(residueFromData);
    });
}

const saveBipFirebase = () => {
    const newBipKey = firebase.database()
        .ref().child('idBips')
        .push().key;//crea uno vacío para obtener la llave

    myBip.key = newBipKey;

    return firebase.database()
        .ref('idBips/' + newBipKey)
        .set(myBip); //set actualiza el valor en esta dirección
}