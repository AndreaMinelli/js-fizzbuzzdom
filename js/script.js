/*
Scrivi un programma che stampi in console i numeri da 1 a 100, ma che
per i multipli di 3 stampi “Fizz” al posto del numero
per i multipli di 5 stampi “Buzz” al posto del numero.
Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz” al posto del numero.
 */

/* BONUS 1
Crea un elemento che faccia da contenitore nel DOM e poi riempilo con i tuoi elementi via JS.
Puoi usare varie tecniche  (template literals, innerHTML, appendecc)
*/

/* BONUS 2
Applica stili differenti agli elementi aggiunti al DOM nel BONUS 1, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz.
Come abbiamo visto puoi  usare varie tecniche (style , className, classList)
*/

//Targhettizzo gli elementi in pagina necessari

const container = document.querySelector('.container');

let unorderList = '<ul class="list-unstyled row p-4 justify-content-center">';


//Ciclo di stampa numeri da 1 a 100
for (let i = 1; i <= 100; i++) {
    let number = i;
    //List Item default
    let listItem = `
    <li class="col d-flex align-items-center justify-content-center">
        <div class="square d-flex justify-content-center align-items-center fw-semibold"> 
            ${number}
        </div>    
    </li>
    `;
    //Se 'i' è multiplo di 3 o 5 o 3 e 5
    if ((i % 5) === 0 && (i % 3) === 0) {
        number = 'FizzBuzz';
        listItem = `
        <li class="col d-flex align-items-center justify-content-center ">
            <div class="square d-flex justify-content-center align-items-center bg-fizzbuzz fw-semibold"> 
               ${number}
            </div>    
        </li>
        `;
    } else if ((i % 3) === 0) {
        number = 'Fizz';
        listItem = `
        <li class="col d-flex align-items-center justify-content-center ">
            <div class="square d-flex justify-content-center align-items-center bg-fizz fw-semibold"> 
               ${number}
            </div>    
        </li>
        `;
    } else if ((i % 5) === 0) {
        number = 'Buzz';
        listItem = `
        <li class="col d-flex align-items-center justify-content-center ">
            <div class="square d-flex justify-content-center align-items-center bg-buzz fw-semibold"> 
               ${number}
            </div>    
        </li>
        `;
    }
    //Creo il list item e lo aggiungo all'ul
    unorderList += listItem;
}
//Chiudo la lista
unorderList += '</ul>'

//Stampo la lista in pagina
container.innerHTML = unorderList;
