/*
Scrivi un programma che stampi in console i numeri da 1 a 100, ma che
per i multipli di 3 stampi “Fizz” al posto del numero
per i multipli di 5 stampi “Buzz” al posto del numero.
Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz” al posto del numero.
 */

//Ciclo di stampa numeri da 1 a 100
for (let i = 1; i <= 100; i++) {
    let number = i;

    if ((i % 5) === 0 && (i % 3) === 0) {
        number = 'FizzBuzz';
    } else if ((i % 3) === 0) {
        number = 'Fizz';
    } else if ((i % 5) === 0) {
        number = 'Buzz';
    }
    console.log(number)
}