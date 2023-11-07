# GENERATORE BIGLIETTI TRENO

Testo dell'esercizio da svolgere:

```
Descrizione:
Scrivere un programma che chieda all’utente:
- Il numero di chilometri da percorrere
- Età del passeggero
Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.
MILESTONE 1:
Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console.
MILESTONE 2:
Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo, come da screenshot allegato. Il recap dei dati e l’output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo).
```

---

Come affronterò il problema e come ho pensato di svolgerlo:

- Saranno aggiunte le variabili del prezzo e dei relativi sconti
- Verranno create delle costanti per richiamare element o selector
- Dentro la funzione click verranno create delle variabili per prendere gli input
- Verrà eseguito il calcolo del prezzo
- Il valore della carrozza e del codice Cp saranno creati in maniera random
- Faccio Print dei valori ottenuti nell'HTML
- Essendo presenti sconti (Minorenni/Over65) creo una condizionale
- Condizionale anche per il print
- Userò il metodo toFixed(2) per ottenere valori con massimo due decimali che andranno ad indicare i centesimi sul prezzo
- Verrà generato l'uso del bottone "Annulla" per svuotare i dati del form
- Verrà visualizzato il prezzo finale del biglietto
