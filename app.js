console.log('time to get started');
function add(n1, n2, showResult, resultPhrase) {
    if (resultPhrase === void 0) { resultPhrase = ''; }
    var result = n1 + n2;
    if (showResult && resultPhrase.length > 0) {
        console.log(resultPhrase + result);
    }
    else if (showResult) {
        console.log(result);
    }
    else {
        return result;
    }
}
var number1 = 5;
var number2 = 5;
var printResult = true;
var resultPhrase = 'Result is: ';
add(number1, number2, true, resultPhrase);
