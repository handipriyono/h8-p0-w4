function totalDigitRekursif(angka) {

  var Numnum = angka.toString().split('');
  var sum = 0
  //for (var i=0; i < stringA.length ; i++) {

  if (Numnum.length > 1) {
    sum = sum + parseInt(Numnum[0]);
    Numnum.splice(0, 1);

    return sum + totalDigitRekursif(parseInt(Numnum.join('')));


  } else {
    return sum + Number(Numnum[0]);
  }








}

// TEST CASES
console.log(totalDigitRekursif(512)); // 8
console.log(totalDigitRekursif(1542)); // 12
console.log(totalDigitRekursif(5)); // 5
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11111)); // 5