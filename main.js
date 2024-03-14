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


    const elements = ["Pelle", "Kalle", new Date(), 34, 42];


    for (let i=0; i<elements.length; i++)
    {
        console.log(elements[i]);
    }


    elements.forEach(function (element, index) { console.log(element, index)});
    //vi kan också skriva den som så:
    elements.forEach( (element, index) => console.log(element, index));


}());







