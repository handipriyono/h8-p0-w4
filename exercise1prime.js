function angkaPrima(angka) {
  // handi//
  var cek = false;
  for (let i = 0; i <= angka; i++) {
    if (angka % 2 === 0 && angka !== 2) {} else if (angka % 3 === 0 && angka !== 3) {} else if (angka % 5 === 0 && angka !== 5) {} else if (angka % 7 === 0 && angka !== 7) {} else {
      cek = true
    }
  }
  return cek;
}

// TEST CASES
console.log(angkaPrima(3)); // true
console.log(angkaPrima(7)); // true
console.log(angkaPrima(6)); // false
console.log(angkaPrima(23)); // true
console.log(angkaPrima(33)); // false
