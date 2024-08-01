function slice(expr:string,start:number,end:number) {
        let first:number;
        if (start < 0) {
            first = expr.length + start;
        } else {
            first = start;
        }
        let last:number;
        if (end < 0) {
            last = expr.length + end;
        } else {
            last = end;
        }
        let result = "";
        for (let i = first; i < last; i++) {
            result += expr[i];
        }
        return result;
    }
//slice
console.log("\n\nslice");
console.log(slice("Hello World", 6, 11)); // "World"
console.log(slice("Hello World", 0, -6)); // "Hello"
console.log(slice("Hello World", 20, 30)); // ""