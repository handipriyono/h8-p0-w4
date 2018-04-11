function ubahHuruf(kata) {
  // HANDI //

  var add = '';

  for (let i = 0; i < kata.length; i++) {
    var awal = kata[i].charCodeAt(kata[i]);

    add += String.fromCharCode(awal + 1);
  }

  return add;
}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu
