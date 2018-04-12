function hitungHuruf(kata) {
  // HANDI

  kata = kata.split(' ');

  var ar = {};
  var total = 0;
  var obj = {};
  for (let i = 0; i < kata.length; i++) {
    obj = {};
    for (let j = 0; j < kata[i].length; j++) {
      if (!obj[kata[i][j]]) {
        obj[kata[i][j]] = 1;
      } else {
        obj[kata[i][j]] += 1;
      }
    }

    ar[kata[i]] = obj;
  }

  var isi = [];
  for (var f in ar) {
    isi.push(Object.values(ar[f]));
  }

  for (let j = 0; j < isi.length; j++) {
    for (let k = 0; k < isi[j].length; k++) {
      if (isi[j][k] > 1) {
        return kata[j];
      }
    }
  }
}

// TEST CASES
console.log(hitungHuruf('Today, is the greatest day ever')); // greatest
console.log(hitungHuruf('I am a passionate developer')); // passionate
console.log(hitungHuruf('aku adalah anak gembala')); // adalah
console.log(hitungHuruf('rajin pangkal kaya')); // pangkal
console.log(hitungHuruf('mengayuh perahu di danau')); // danau
