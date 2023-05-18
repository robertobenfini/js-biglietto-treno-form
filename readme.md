Problema: Scrivere un programma che chieda all’utente:
- Il numero di chilometri da percorrere
- Età del passeggero
Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.
MILESTONE 1:
Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console.
MILESTONE 2:
Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo. Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo). Questo richiederà un minimo di ricerca.
Attenzione: non proseguite alla milestone 2 finchè non avete terminato la milestone 1.
Nota:
Se non vi sentite particolarmente creativi, questa potrebbe essere un’implementazione da seguire per il secondo milestone. Potete scegliere di implementare una soluzione completamente diversa oppure simile, ma in ogni caso cercate di farla vostra.
Consigli:
Ricordatevi quanto visto a lezione su come recuperare i valori di un campo input con la proprietà .value e soprattutto quando recuperarla

milestone 1:
1.chiedere all'utente il chilometraggio che si vuole percorrere
2.chiedere all'utente l'età
3.moltiplicare il numero dei km x 0.21
4.se l'età è <18 applicare lo sconto del 20%
5.se l'età è >=65 applicare lo sconto del 40%
6.altrimenti applicare il prezzo pieno
7.far visualizzare il prezzo nella console
8-creare il bottone "genera" per avere il prezzo finale

milestone 2:
9.chiedere il nome e cognome
10.creare un form con i dati
11.aggiungere bottone annulla
12.stampare il recap dei dati con il prezzo con il .tofixed