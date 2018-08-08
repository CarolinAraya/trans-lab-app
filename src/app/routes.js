
function showPerfilPage() {
    $('#getResidueApp').hide();
    $('#perfilApp').show();
    $('#logged').hide();

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

function showPerfilPage() {
    $('#loginRegister').hide(); 
    $('#logged').show(); 
    $('#registerPage').hide();
}

function showLoginPage() {
    $('#loginRegister').show(); 
    $('#logged').hide(); 
    $('#registerPage').hide();
}

 
 