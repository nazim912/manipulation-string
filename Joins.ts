function join(exprs:string[],jointer:string) {
    let result = "";
    for (let i = 0; i < exprs.length; i++) {
        result += exprs[i];
        if (i !== exprs.length - 1) {
            result += jointer;
        }
    }
    return result;
}
//join
console.log("\n\njoin");
console.log(join(["apple", "banana", "cherry"], ", ")); // "apple, banana, cherry"
console.log(join(["apple", "banana", "cherry"], "")); // "applebananacherry"
console.log(join([], ", ")); // ""
