function sorting(arrNumber) {
  // trying not to use magic
  for (var i = 0; i < arrNumber.length; i++) {
    for (var y = 0; y < arrNumber.length; y++) {

      if (arrNumber[y] < arrNumber[y + 1]) {
        var sorte = arrNumber[y];
        arrNumber[y] = arrNumber[y + 1];
        arrNumber[y + 1] = sorte;

      }
    }

  }
  return arrNumber;

}

function getTotal(arrNumber) {
  var total = 0;
  for (var i = 0; i < arrNumber.length; i++) {
    if (arrNumber[0] === arrNumber[i]) {
      total = total + 1;
    }
  }


  return total;
}

function mostFrequentLargestNumbers(arrNumber) {
  var listSort = sorting(arrNumber);
  var countHighest = getTotal(listSort);
  return countHighest;
}



// TEST CASE only bro!:
console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
//'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'

console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
//'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'

console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
//'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'

// console.log(countLargestNumbers([]));
//''