<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>

var counter = 0;
function assignCharacters(playerAmount){
}

function spy(){
  var spy={
    name: "Spy",
    life: true,
    voting: true,
    icon: new Image()
  };
  counter++;
  spy.icon.src = "Images/testImage.jpg";

  $(document).ready(function(){
      $("#test").html(spy.icon);
      $("#thing").html(counter);

      if(counter<3 || counter>7){
        $("#testing").html("True");
        $("#test").fadeTo("slow", 1);
        spy.life = true;
      }
      else{
        $("#testing").html(spy.name + " is dead:");
        $("#test").fadeTo("slow", .5);
        spy.life = false;
      }
    });
}

function bodyguard(){

}

function merc(){

}

function counterIntel(){

}

function
