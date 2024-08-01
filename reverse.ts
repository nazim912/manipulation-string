function reverse(expr:string) {
    let result = "";
    for (let i = expr.length - 1; i >= 0; i--) {
        result += expr[i];
    }
    return result;
}

//reverse
console.log("\n\nreverse");
console.log(reverse("Hello World")); // "dlroW olleH"
console.log(reverse("")); // ""
console.log(reverse("!@#$%^&*()")); // ")(*&^%$#@!"
