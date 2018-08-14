

getResidueFromApi = (codeBip) => { //getBipAmountFromApi(code)
    $.ajax({
        url: `http://bip-servicio.herokuapp.com/api/v1/solicitudes.json?bip=${codeBip}`
    }).done(data => {
        residueFromData = data.saldoTarjeta.replace("$", "");
    });
}


 