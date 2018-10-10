var bengt = 347;
var enBurk = 13.95;
var ettPack = 30;
var antalEnPack=0;
var antalEnBurk=0;
var rest;
var burkTotal;

while(bengt >= 30)
    {
    bengt = bengt-ettPack
    antalEnPack ++;
    };

while(bengt>= 13.95){
    bengt = bengt - enBurk;
    antalEnBurk++;
    };

burkTotal = antalEnBurk+antalEnPack*3;

console.log("Bengt kan köpa",burkTotal,"burkar");
