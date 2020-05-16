// 7 kyu on CodeWars

//Solution:

function printerError(s) {
    // your code
    let denominator = s.length.toString();
    let error = s.replace(/[^n-z]/g, "").length.toString();
    return error + "/" + denominator;
}
