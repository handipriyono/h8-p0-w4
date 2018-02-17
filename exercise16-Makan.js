function makanTerusRekursif(waktu) {
  // you can only write your code here!

  var total = 0;
  if (waktu <= 0) {
    return total;
  } else {
    total = total + 1;
    return total + makanTerusRekursif(waktu - 15);
  }

}

// TEST CASES only bro:
console.log(makanTerusRekursif(66)); // 5
console.log(makanTerusRekursif(100)); // 7
console.log(makanTerusRekursif(90)); // 6
console.log(makanTerusRekursif(10)); // 1
console.log(makanTerusRekursif(0)); // 0