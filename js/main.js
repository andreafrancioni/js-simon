
let numbersElement = document.getElementById("numbers");
let listaNum = [];
let userNum = [];
let points = 0;


for(i=0; i<5; i++){
    listaNum[i]=randomNumberGen(100);
}

numbersElement.innerHTML += listaNum;

setTimeout(hideNumber, 1000)
setTimeout(guessNumber, 1100)

checkNumber();

function hideNumber(){
    numbersElement.innerHTML = "";
}

/*** FUNZIONE PER RIMUOVERE NUMERI IN PAGINA E FAR INSERIRE ALL'UTENTE I NUMERI CHE RICORDA ***/
function guessNumber(){
    
    for(i=0; i<5; i++){
        userNum[i]=prompt("Inserisci uno alla volta i numeri che ti ricordi.")
    }
    
}

function checkNumber(){

    for(i=0; i<5; i++){
        if(userNum.includes(listaNum)){
            points += 1
        }
        else{
            console.log("numero non presente");
        }
    }

    console.log(`Ne hai indovinate ${points} su 5`);

}


/*** FUNZIONE GENERA NUMERI CASUALI ***/
function randomNumberGen(max){
    return Math.floor(Math.random() * max);
}