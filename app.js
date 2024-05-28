let inpEleDollar = document.querySelectorAll(".container input")[0];
let inpEleSaudia = document.querySelectorAll(".container input")[1];
let h2EleDollar = document.querySelectorAll(".container h2")[0];
let h2EleSaudia = document.querySelectorAll(".container h2")[1];

function myFun (){
    let usDollar = inpEleDollar.value;
    let saudia = inpEleSaudia.value;
    if(usDollar){
    h2EleDollar.innerHTML = `${usDollar * 278}`
    }
    if(saudia){
    h2EleSaudia.innerHTML = `${saudia * 74}`
    }
    else{
        console.log("Please Ente the number")
    }
}