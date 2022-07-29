$("document").ready(function(){
     let Username=prompt("Enter your name");
     console.log(Username);
     // document.getElementById("greet").innerHTML = "Hello " + Username + "!";
     $(".greet").html("Hello "+Username);
});

