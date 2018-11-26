

getBipAmountFromApi = (codeBip, callback) => {
    $.ajax({
        url: `https://bip-servicio.herokuapp.com/api/v1/solicitudes.json?bip=${codeBip}`,
        success: data => {
            callback(data.saldoTarjeta.replace("$", "").replace(".", ""))

        },
        statusCode: {
            400 : () => {
                alert("Verifica que el código bip sea correcto")
            },
            500: () => {
                alert("Ups! Tenemos problemas con el servidos. Disculpe! Intente más tarde.")
            }
        }
    })
}
