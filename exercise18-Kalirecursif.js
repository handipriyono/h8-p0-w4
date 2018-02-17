function kaliTerusRekursif(angka) {
  // you can only write your code here!
  var kali = 1;
  var numnum = angka.toString().split('');

  for (var i = 0; i < numnum.length; i++) {
    kali = kali * Number(numnum[i]);

  }

  var kalis = kali.toString().split('');

  if (kalis.length === 1) {
    return kali;
  } else {
    return kaliTerusRekursif(kali);
  }

}

// TEST CASES only bro!:
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6