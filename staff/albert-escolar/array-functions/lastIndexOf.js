'use strict'
/*The lastIndexOf() method returns the last index at which a given element can be found in the array,
 or -1 if it is not present. The array is searched backwards, starting at fromIndex.*/
var array = ["cat", "dog", "snake", "cat"];
var elementSearched = "cat";

function lastIndexOf(elementSearched, array) {
    if(!(array instanceof Array))throw(array+' is not an array');
    for (var i = array.length; i >= 0; i--) {
        if (elementSearched === array[i]) {
            return i;
        }
    } return -1
}

