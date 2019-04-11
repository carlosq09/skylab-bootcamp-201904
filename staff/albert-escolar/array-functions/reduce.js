
function reduce(array, callback, initialValue) {
    if (!(array instanceof Array)) throw TypeError(array + ' is not an array');
    var valorAnterior = array[0];
    if (initialValue) {
        valorAnterior = initialValue;
        var a = 0;
    }else{
        a = 1;
    }
    for (var i = a; i < array.length; i++) {
        valorAnterior = callback(valorAnterior, array[i]);

    } return valorAnterior;
};