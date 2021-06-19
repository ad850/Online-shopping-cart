const h =document.querySelector("h1");

h.addEventListener('mouseenter',()=>{



h.style.color="red";

});


h.addEventListener('mouseleave',()=>{


    h.style.color="white";

    });



let atom = document.getElementById("cars");

atom.addEventListener('change', () => {

    let at = document.getElementById("cars").value;


    console.log(`the choose is :${at}`)

});

let co = document.getElementById("name");

co.addEventListener(('change'), () => {
    let atm = document.getElementById("name").innerHTML;

    console.log(atm);

});