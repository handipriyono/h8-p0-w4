function cariModus(arr) {
  // handi //
  var total = 0;
  var siapa = [];
  for (let i = 0; i < arr.length; i++) {
    total = 0;
    var cek = false;
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j] && i !== j) {
        cek = true;
      }
    }

    if (cek) {
      siapa.push(arr[i]);
    }
  }

  if (siapa.length === 0 || arr.length === siapa.length) return -1;

  return siapa[0];
}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1
