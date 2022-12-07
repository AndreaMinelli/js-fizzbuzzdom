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

//Creo ul list
const unorderList = document.createElement('ul');
unorderList.classList.add('list-unstyled', 'row', 'p-4', 'justify-content-center');

//Ciclo di stampa numeri da 1 a 100
for (let i = 1; i <= 100; i++) {
    //Creo list item
    const listItem = document.createElement('li');
    listItem.classList.add('col', 'd-flex', 'align-items-center', 'justify-content-center');
    //Creo contenitore nel list item
    const square = document.createElement('div');
    square.classList.add('square', 'd-flex', 'justify-content-center', 'align-items-center', 'fw-semibold');
    listItem.appendChild(square);

    let number = i;

    //Se 'i' è multiplo di 3 o 5 o 3 e 5
    if ((i % 5) === 0 && (i % 3) === 0) {
        number = 'FizzBuzz';
        square.classList.add('bg-fizzbuzz');
    } else if ((i % 3) === 0) {
        number = 'Fizz';
        square.classList.add('bg-fizz');
    } else if ((i % 5) === 0) {
        number = 'Buzz';
        square.classList.add('bg-buzz');
    }

    //List Item default
    square.append(number);

    //Aggiungo il list item all'ul
    unorderList.appendChild(listItem);
}


//Stampo la lista in pagina
container.appendChild(unorderList);
