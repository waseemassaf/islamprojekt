/**
 * A function to wrap it all in.
 */




(function ()
{
    "use strict";
    let greeting = "GodMorgon!"; //använder let (datatyp)
   
    const now = new Date();


    let greetingElement = document.getElementById("greeting");


    if (now.getHours() >= 10)
    {
        greeting = "Goddag!";
    }
    else if (now.getHours() >= 17)
    {
        greeting = "GodKväll!";
    }


    greetingElement.textContent = greeting;


   
}());






