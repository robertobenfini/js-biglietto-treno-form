//prezzo al km
const prezzo_km=0.21;
//bottone genera
let button = document.getElementById('genera');
button.addEventListener('click', function(){
    
    //input eta
    let input_eta = parseInt (document.getElementById('eta').value);
    console.log(input_eta)
    
    //input km da percorrere
    let input_km = parseInt (document.getElementById('km').value);
    console.log(input_km)    

    //prezzo minorenni
    if (input_eta < 18) {
        let prezzo_minorenni = (input_km * prezzo_km) - ((input_km * prezzo_km) * 20 / 100);
        console.log(prezzo_minorenni)
    }

    //prezzo over 65
    else if (input_eta > 65) {
        let prezzo_65 = (input_km * prezzo_km) - ((input_km * prezzo_km) * 40 / 100);
        console.log(prezzo_65)
    }

    //prezzo pieno
    else { 
        let prezzo_biglietto_intero = input_km * prezzo_km;
        console.log(prezzo_biglietto_intero)
    }
})