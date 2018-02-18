function shoppingTime(memberId, money) {
  var belian = [];
  var obj = {};

  var sisa = money;

  if (memberId === '' || memberId === undefined) {
    return 'Mohon maaf, toko X hanya berlaku untuk member saja';
  }

  if (money < 50000) {
    return 'Mohon maaf, uang tidak cukup';
  }

  obj.memberId = memberId;
  obj.money = money;

  while (money >= 50000) {
    if (money >= 1500000 && belian.includes('Sepatu Stacattu') === false) {
      belian.push('Sepatu Stacattu');
      money = money - 1500000;
    } else if (money >= 500000 && belian.includes('Baju Zoro') === false) {
      belian.push('Baju Zoro');
      money = money - 500000;
    } else if (money >= 250000 && belian.includes('Baju H&N') === false) {
      belian.push('Baju H&N');
      money = money - 250000;
    } else if (money >= 175000 && belian.includes('Sweater Uniklooh') === false) {
      belian.push('Sweater Uniklooh');
      money = money - 175000;
    } else if (
      money >= 50000 &&
      belian.includes('Casing Handphone') === false
    ) {
      belian.push('Casing Handphone');
      money = money - 50000;
    } else {
      break;
    }
  }

  obj.listPurchased = belian;
  obj.changeMoney = money;

  return obj;
}



// TEST CASES only Bro!
console.log(shoppingTime('1820RzKrnWn08', 2475000));


//{ memberId: '1820RzKrnWn08',
// money: 2475000,
// listPurchased:
//  [ 'Sepatu Stacattu',
//    'Baju Zoro',
//    'Baju H&N',
//    'Sweater Uniklooh',
//    'Casing Handphone' ],
// changeMoney: 0 }
console.log(shoppingTime('82Ku8Ma742', 170000));
//{ memberId: '82Ku8Ma742',
// money: 170000,
// listPurchased:
//  [ 'Casing Handphone' ],
// changeMoney: 120000 }
console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja