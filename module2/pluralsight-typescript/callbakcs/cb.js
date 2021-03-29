var operations = function (number1, number2, cb) {
    var result = number1 + number2;
    cb(result);
};
operations(2, 3, function (result) {
    console.log('Result:', result);
});
