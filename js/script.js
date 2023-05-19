//prezzo al km
const prezzo_km=0.21;

//bottone genera
let button = document.getElementById('genera');
button.addEventListener('click', function(){
    
    //input nome e cognome
    let input_nome = (document.getElementById('nome').value);
    document.getElementById('nome_pass').innerHTML = input_nome;

    //input eta
    let input_eta = parseInt (document.getElementById('eta').value);
    
    //input km da percorrere
    let input_km = parseInt (document.getElementById('km').value);  

    //prezzo minorenni
    if (input_eta === 2) {
        let prezzo_minorenni = input_km * prezzo_km * 0.8;
        document.getElementById('prezzo_finale').innerHTML = ((prezzo_minorenni).toFixed(2))+'€';
    }

    //prezzo over 65
    else if (input_eta === 3) {
        let prezzo_65 = input_km * prezzo_km * 0.6;
        document.getElementById('prezzo_finale').innerHTML = ((prezzo_65).toFixed(2))+'€';
    }

    //prezzo pieno
    else { 
        let prezzo_biglietto_intero = input_km * prezzo_km;
        document.getElementById('prezzo_finale').innerHTML = ((prezzo_biglietto_intero).toFixed(2))+'€';
    }
})