import "./style.css";
import * as R from "ramda";

// DANE
const numbers = [1, 2, 3, 102, 959, 0];
const users = [
  { id: 1, name: "Alice", hair: "black" },
  { id: 2, name: "Winston", hair: "brown" },
  { id: 3, name: "Jack", hair: "blonde" },
];

// DLA KAZDEGO CWICZENIA...
// Zastap callback wewnatrz funkcji wyzszego rzedu
// jedna, wybrana funkcja z Ramdy

// FUNKCJE DO WYKORZYSTANIA
// R.prop
// R.propEq
// R.add

// DOKUMENTACJA
// https://ramdajs.com/docs/

// CWICZENIE 1
// Stworz sume wszystkich numerow w array
const sum = numbers.reduce((acc, number) => acc + number, 0);

console.log(sum);

// CWICZENIE 2
// Stworz array skladajacy sie jedynie z wartosci "hair" userow
const usersHair = users.map((user) => user.hair);

console.log(usersHair);

// CWICZENIE 3
// Stworz array userow o dokladnie jednym kolorze wlosow: "black"
const usersOfHair = users.filter((user) => user.hair === "black");

console.log(usersOfHair);
