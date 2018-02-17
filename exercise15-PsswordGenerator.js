function changeVocals(str) {
  //code di sini
  var huruf = 'abcdefghijklmnopqrstuvwxyz';
  var hurufB = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var ad = '';
  for (var i = 0; i < str.length; i++) {

    if (str[i] === 'a') {

      ad = ad + huruf[huruf.indexOf('a') + 1];
    } else if (str[i] === 'i') {
      ad = ad + huruf[huruf.indexOf('i') + 1];
    } else if (str[i] === 'u') {
      ad = ad + huruf[huruf.indexOf('u') + 1];
    } else if (str[i] === 'e') {
      ad = ad + huruf[huruf.indexOf('e') + 1];
    } else if (str[i] === 'o') {
      ad = ad + huruf[huruf.indexOf('o') + 1];
    } else if (str[i] === 'A') {
      ad = ad + hurufB[hurufB.indexOf('A') + 1];
    } else if (str[i] === 'I') {
      ad = ad + hurufB[hurufB.indexOf('I') + 1];
    } else if (str[i] === 'U') {
      ad = ad + hurufB[hurufB.indexOf('U') + 1];
    } else if (str[i] === 'E') {
      ad = ad + hurufB[hurufB.indexOf('E') + 1];
    } else if (str[i] === 'O') {
      ad = ad + hurufB[hurufB.indexOf('O') + 1];
    } else {
      ad = ad + str[i];
    }

  }

  return ad;

}

function reverseWord(str) {
  //code di sini
  var balek = '';
  for (var i = str.length - 1; i >= 0; i--) {
    balek = balek + str[i];

  }

  return balek;
}

function setLowerUpperCase(str) {
  //code di sini
  var tambah = '';
  for (var i = 0; i < str.length; i++) {

    if (str[i] === str[i].toLowerCase()) {
      tambah = tambah + str[i].toUpperCase();
    } else if (str[i] === str[i].toUpperCase()) {
      tambah = tambah + str[i].toLowerCase();
    }
  }

  return tambah;
}

function removeSpaces(str) {
  //code di sini
  var apus = '';
  for (var i = 0; i < str.length; i++) {

    if (str[i] === ' ') {
      apus = apus + '';
    } else {
      apus = apus + str[i];
    }

  }

  return apus;
}

function passwordGenerator(name) {

  if (name.length < 5) {
    return 'Minimal karakter yang diinputkan adalah 5 karakter';
  }

  var ubahVokal = changeVocals(name);
  var balik = reverseWord(ubahVokal);
  var besarKecil = setLowerUpperCase(balik);
  var hapusSpasi = removeSpaces(besarKecil);

  return hapusSpasi;

}

//TEST Case Only Bro!
console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'