
function showPerfilPage() {
    $('#getResidueApp').hide();
    $('#perfilApp').show();
    $('#logged').show();
    // $('#sidevar').show();
    $('#loginRegister').hide();

  }
  
  function showGetResiduePage() {
    $('#perfilApp').hide();
    $('#getResidueApp').show();
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

 
 