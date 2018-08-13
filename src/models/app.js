

getResidueFromApi = (codeBip) => {
    $.ajax({
        url: `http://bip-servicio.herokuapp.com/api/v1/solicitudes.json?bip=${codeBip}`
    }).done(data => {
        residueFromData = data.saldoTarjeta;
       
       cleanResidueFromData(residueFromData);
    });
}