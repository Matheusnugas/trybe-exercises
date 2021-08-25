const a;
const b;
const c;

if (a < 0 || b < 0 || c < 0) {
    console.log("Error. Input can't be a negative number");
} else if ((a + b + c) === 180) {
    console.log(true);
} else if ((a + b + c) !== 180) {
    console.log(false);
}