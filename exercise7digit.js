function digitPerkalianMinimum(angka) {
  // HANDI
  var s = [];
  for (let i = 1; i <= angka; i++) {
    var cek = false;
    for (let j = 1; j <= angka; j++) {
      if (i * j === angka) {
        var ss = i + '' + j;

        cek = true;
      }
    }

    if (cek) {
      s.push(ss);
    }
  }

  var small = 0;
  for (let j = 0; j < s.length; j++) {
    if (small < s[j]) {
      small = s[j];
    }
  }

  return small.length;
}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2
