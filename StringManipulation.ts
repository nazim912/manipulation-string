/*

Exercice sur les Manipulations de Strings

Dans cet exercice, l'objectif est de recréer plusieurs fonctions de manipulation de strings sans utiliser 
les fonctions natives JavaScript correspondantes. 

Fonctions à Implémenter :

- split : Divise une chaîne de caractères en un tableau de sous-chaînes en fonction d'un séparateur.
- join : Rassemble les éléments d'un tableau en une seule chaîne de caractères en les concaténant avec 
        un séparateur.
- replace : Remplace les occurrences d'une sous-chaîne dans une chaîne de caractères par une autre sous-chaîne.
- reverse : Inverse l'ordre des caractères dans une chaîne de caractères.
- slice : Extrait une section d'une chaîne de caractères et renvoie une nouvelle chaîne de caractères.

*/





// // split
// console.log("split");
// console.log(split("Hello World", " ")); // ["Hello", "World"]
// console.log(split("apple,banana,cherry", ",")); // ["apple", "banana", "cherry"]
// console.log(split("abcde", ",")); // ["abcde"]

// //replace
// console.log("\n\nreplace");
// console.log(replace("Hello World", "World", "Universe")); // "Hello Universe"
// console.log(replace("Hello World", "Universe", "World")); // "Hello World"
// console.log(replace("Hello World", "World", "")); // "Hello "

// //reverse
// console.log("\n\nreverse");
// console.log(reverse("Hello World")); // "dlroW olleH"
// console.log(reverse("")); // ""
// console.log(reverse("!@#$%^&*()")); // ")(*&^%$#@!"

// //slice
// console.log("\n\nslice");
// console.log(slice("Hello World", 6, 11)); // "World"
// console.log(slice("Hello World", 0, -6)); // "Hello"
// console.log(slice("Hello World", 20, 30)); // ""