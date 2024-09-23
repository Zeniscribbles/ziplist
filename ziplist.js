"use strict";
function zipList(listOne, listTwo) {
    const list = [];
    for (let i = 0; i < listOne.length; i++) {
        list.push(listOne[i]); // Push from listOne
        list.push(listTwo[i]); // Push from listTwo
    }
    return list;
}
console.log(zipList(['a', 'b', 'c'], ['1', '2', '3']));
