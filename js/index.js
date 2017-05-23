$(document).ready(function(){

$('form').submit(function(event){

    var firstName = $('#firstName').val();

    if (firstName === ""){
        alert("First Name must be filled out");
        event.preventDefault();
    }

    });

});