
const auth = firebase.auth();

auth.onAuthStateChanged(function(user) {
  if (user) {
    console.log(user);
    $('#account').hide();
    $('#signOut').show();
    document.getElementById("loginText").textContent = "Log Out";
  } else {
    document.getElementById("loginText").textContent = "Log In";
    $('#signOut').hide();
    $('#account').show();
  }
});



$('#signInButton').click(function(){
    var email = $('#email').val();
    var password = $('#password').val();
    if(email != "" && password != ""){
      auth.signInWithEmailAndPassword(email, password).catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
      });
    }
});

$('#signUpButton').click(function(){
    var email = $('#emailForm').val();
    var password = $('#passwordForm').val();
    if(email != "" && password != ""){
      auth.createUserWithEmailAndPassword(email, password).catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
      });
    }
});

//Sign out function
$('#signOut').click(function(){
    auth.signOut();
});
