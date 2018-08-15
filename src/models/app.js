

getBipAmountFromApi = (codeBip, callback) => { //getBipAmountFromApi(code)
   
    $.ajax({
        url: `http://bip-servicio.herokuapp.com/api/v1/solicitudes.json?bip=${codeBip}`
    }).done(data => {
        callback(data.saldoTarjeta.replace("$", ""));
    });
}


 //function getBipAmountFromApi(code, callback)
                                    //{
                                    //(Ajax llamando a la api).success((data) => {
                                        //hacer lo que hay que 
                                        //callback();
                                        //});
                                        //}