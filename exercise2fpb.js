function fpb(angka1, angka2) {
  // handi //
  /*
	PSEUDOCODE

	SET FUNCTION fpb with parameter angka1 and angka2

	sum angka1 with angka2 and assign as 'cek'
	SET 'i' to 0

	FOR i is less than 'cek'
	  IF angka1 MODULO 'i' is Equals to 0 AND angka2 MODULO by i is Equals to 0
	   SET 'besar' to 'i'
	 END IF
  END for


RETURN 'besar'

END function



	*/
  var cek = angka1 + angka2;
  for (let i = 0; i < cek; i++) {
    if (angka1 % i === 0 && angka2 % i === 0) {
      var besar = i;
    }
  }

  return besar;
}

// TEST CASES
console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1
