function urutkanAbjad(str) {
  //Fastest <-- method
  // str = str.split('')
  // return str.sort().join('')

  //general method/manual
  var save = [];
  for (let i = 0; i < str.length; i++) {
    save.push(str[i]);
  }

  for (let i = 0; i < save.length; i++) {
    for (let j = 0; j < save.length; j++) {
      if (save[j] > save[j + 1]) {
        var kc = save[j];
        save[j] = save[j + 1];
        save[j + 1] = kc;
      }
    }
  }

  return save.join('');
}

// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'
