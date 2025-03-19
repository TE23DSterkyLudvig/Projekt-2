let priser = [];
let produkter = [];

let summering = 0;



function lägga_till(produkt, pris){


if(produkt == "3600","7900","i5","RMX","Artic","Mortar")
    {
        produkter.push(produkt);
        console.log("Du la till 1", "" + produkt , "i varukorgen")
       localStorage.setItem("varor", JSON.stringify(produkter));
}
if(pris == 3000,8000,7000,800,700,3500)
    {
    priser.push(pris);
    console.log(produkt + "" + "kostade" + "" + pris +  " "  + "kr")
    localStorage.setItem("priser", JSON.stringify(priser));
    summering += pris;
    console.log("Summa:" + "" + summering + "kr");

    let summa = document.querySelector("#summa");
    summa.textContent = "Summa:" + summering + "kr";

    let varukorg_lista = document.querySelector("#varulista");
    let list_varor = document.createElement("li");
    list_varor.textContent = produkt + ":" + pris + "kr";
    varukorg_lista.appendChild(list_varor);
}



}
