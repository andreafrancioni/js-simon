
let listaNum = [];

for(i=0; i<5; i++){
    listaNum[i]=randomNumberGen(100);
}

/*** FUNZIONE GENERA NUMERI CASUALI ***/
function randomNumberGen(max){
    return Math.floor(Math.random() * max);
}