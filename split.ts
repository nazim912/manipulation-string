function split(expr: string, splitter: string) {
    let result:string[] = [];
    let currentString = ""
    for (let i = 0; i < expr.length; i++) {
        if (expr[i] == splitter) {
            result.push(currentString);
            currentString=""
        } else {
            currentString += expr[i];
        }
    }
    result.push(currentString)
    return result;
}
// split
console.log("split");
console.log(split("Hello World", " ")); // ["Hello", "World"]
console.log(split("apple,banana,cherry", ",")); // ["apple", "banana", "cherry"]
console.log(split("abcde", ",")); // ["abcde"]