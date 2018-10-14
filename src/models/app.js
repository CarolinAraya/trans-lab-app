

getBipAmountFromApi = (codeBip, callback) => { 
   
    $.ajax({
        url: `https://bip-servicio.herokuapp.com/api/v1/solicitudes.json?bip=${codeBip}`
    }).done(data => {
        callback(data.saldoTarjeta.replace("$", "").replace(".", ""));
    });
}


