
// FizzBuzz
// Scrivi un programma che stampi i numeri da 1 a 100,
// ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
// Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.


// Stampo i numeri da 1 a 100
var num = [100];
for (i = 0; i < 100; i++) {
  num[i] = i + 1;
  // Per i numeri che sono sia multipli di 3 che di 5 stampo "FizzBuzz"
    if ((num[i] % 3 == 0) && (num[i] % 5 == 0)) {
    num[i] = "FizzBuzz";
  }
  // per i multipli di 3 stampo "Fizz" al posto del numero
  else if (num[i] % 3 == 0) {
    num[i] = "Fizz";
  }
  // per i multipli di 5 stampo "Buzz" al posto del numero
  else if (num[i] % 5 == 0) {
    num[i] = "Buzz";
  }
  console.log(num[i]);
}
