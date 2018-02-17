function totalDigitRekursif(angka) {
  var sum = 0;

  // split  number
  var numbers = angka.toString().split('');

  while (numbers.length > 0) {

    sum += parseInt(numbers[0]);
    // remove the number that was just added to sum
    numbers.splice(0, 1);
    totalDigitRekursif(numbers.join(''));
  }


  return sum;

}

// TEST CASES
console.log(totalDigitRekursif(512)); // 8
console.log(totalDigitRekursif(1542)); // 12
console.log(totalDigitRekursif(5)); // 5
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11111)); // 5