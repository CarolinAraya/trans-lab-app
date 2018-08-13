

getResidueFromApi = (codeBip) => {
    $.ajax({
        url: `http://bip-servicio.herokuapp.com/api/v1/solicitudes.json?bip=${codeBip}`
    }).done(data => {
        residueBip = data.saldoTarjeta;
       // responseContainer.innerHTML = `<h1 class= "residue">${data.saldoTarjeta}</h1>`
       
        return residueBip;
    });
}