
function showPerfilPage() {
    $('#getResidueApp').hide();
    $('#perfilApp').show();
    $('#logged').show();
    // $('#sidevar').show();
    $('#loginRegister').hide();
    $('#calculate').hide();

}

function showGetResiduePage() {
    $('#perfilApp').hide();
    $('#getResidueApp').show();
    $('#calculate').hide();
}

function calculateRoute() {
    $('#perfilApp').hide();
    $('#getResidueApp').hide();
    $('#calculate').show();

}

/*   function showRegisterPage() {
    //$('#login').hide();
    $('#passwordRegister').show();
    register();
  } */

function showRegisterPage() {
    //$('#loginRegister').hide(); 
    // $('#logged').hide(); 
    $('#registerPage').show();
}


function showLoginPage() {
    $('#loginRegister').show();
    $('#logged').hide();
    $('#registerPage').hide();
    $('#sidevar').hide();


}


