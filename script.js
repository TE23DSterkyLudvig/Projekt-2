

let priser = JSON.parse(localStorage.getItem("priser")) || [];          // priser och produkter blir json listor om det innehåller något.
let produkter = JSON.parse(localStorage.getItem("varor")) || [];

let summering = 0;

// så att informationen från JSON stannar kvar i listan.
function ladda(){
    if(priser.length > 0){
    let summa = document.querySelector("#summa");
    for (let index = 0; index < priser.length; index++) {
        summering += priser[index];
    }
    let varu_lista = document.querySelector("#varulista");

    for (let index = 0; index < produkter.length; index++) {
        let varu_produkter = document.createElement("li");
        varu_produkter.textContent= produkter[index] + ":"+  "" + priser[index] + "kr";
        varu_lista.appendChild(varu_produkter);
    }
    summa.textContent = summering + "" + "kr";
     }
}
// för att lägga till produkt

function lägga_till(produkt, pris){


if(produkt == "3600","7900","i5","RMX","Artic","Mortar")
    {
        produkter.push(produkt);
        console.log("Du la till 1", "" + produkt , "i varukorgen");
       
}


if(pris == 3000,8000,7000,800,700,3500)
    {
    priser.push(pris);
    console.log(produkt + "" + "kostade" + "" + pris +  " "  + "kr");
    
   

    summering += pris;
    console.log("Summa:" + "" + summering + "kr");

    let summa = document.querySelector("#summa");
    summa.textContent = "Summa:" + summering + "kr";

    let varukorg_lista = document.querySelector("#varulista");
    let list_varor = document.createElement("li");
    list_varor.textContent = produkt + ":" + pris + "kr";
    varukorg_lista.appendChild(list_varor);

    
}
 localStorage.setItem("varor", JSON.stringify(produkter));  
 localStorage.setItem("priser", JSON.stringify(priser));
}