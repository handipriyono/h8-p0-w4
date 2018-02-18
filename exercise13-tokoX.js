function countProfit(shoppers) {
  let listBarang = [
    ['Sepatu Stacattu', 1500000, 10],
    ['Baju Zoro', 500000, 2],
    ['Sweater Uniklooh', 175000, 1],
  ];

  // menampung object
  var objku1 = {};
  var objku2 = {};
  var objku3 = {};

  // default asignment:  if they don't buy the product:
  var sisa1 = listBarang[0][2];
  var sisa2 = listBarang[1][2];
  var sisa3 = listBarang[2][2];

  var pembeli1 = [];
  var pembeli2 = [];
  var pembeli3 = [];

  var profit1 = 0;
  var profit2 = 0;
  var profit3 = 0;

  // default asignment (empty)

  for (var m = 0; m < 3; m++) {

    if (m === 0) {
      objku1.product = listBarang[0][0];
      objku1.shoppers = pembeli1;
      objku1.leftOver = sisa1;
      objku1.totalProfit = profit1;
    } else if (m === 1) {

      objku2.product = listBarang[1][0];
      objku2.shoppers = pembeli2;
      objku2.leftOver = sisa2;
      objku2.totalProfit = profit2;
    } else {

      objku3.product = listBarang[2][0];
      objku3.shoppers = pembeli3;
      objku3.leftOver = sisa3;
      objku3.totalProfit = profit3;
    }

  }

  // store all object to array:
  var all = [];

  for (var i = 0; i < shoppers.length; i++) {
    if (
      listBarang[0][0] === shoppers[i].product &&
      sisa1 >= shoppers[i].amount
    ) {
      objku1.product = listBarang[0][0];
      pembeli1.push(shoppers[i].name);
      objku1.shoppers = pembeli1;

      sisa1 -= shoppers[i].amount;
      objku1.leftOver = sisa1;

      profit1 = (listBarang[0][2] - sisa1) * listBarang[0][1];
      objku1.totalProfit = profit1;
    } else if (
      listBarang[1][0] === shoppers[i].product &&
      sisa2 >= shoppers[i].amount
    ) {
      objku2.product = listBarang[1][0];
      pembeli2.push(shoppers[i].name);
      objku2.shoppers = pembeli2;

      sisa2 -= shoppers[i].amount;
      objku2.leftOver = sisa2;

      profit2 = (listBarang[1][2] - sisa2) * listBarang[1][1];
      objku2.totalProfit = profit2;
    } else if (
      listBarang[2][0] === shoppers[i].product &&
      sisa3 >= shoppers[i].amount
    ) {
      objku3.product = listBarang[2][0];
      pembeli3.push(shoppers[i].name);
      objku3.shoppers = pembeli3;

      sisa3 -= shoppers[i].amount;
      objku3.leftOver = sisa3;

      profit3 = (listBarang[2][2] - sisa3) * listBarang[2][1];
      objku3.totalProfit = profit3;
    }
  }

  // is array empty?
  if (shoppers.length === 0) {
    return all;
  } else {
    all.push(objku1, objku2, objku3);

    return all;
  }

}

// TEST CASES only bro!:

console.log(countProfit([{
  name: 'Windi',
  product: 'Sepatu Stacattu',
  amount: 2,
}, {
  name: 'Vanessa',
  product: 'Sepatu Stacattu',
  amount: 3,
}, {
  name: 'Rani',
  product: 'Sweater Uniklooh',
  amount: 2,
}]));
//[ { product: 'Sepatu Stacattu',
//   shoppers: [ 'Windi', 'Vanessa' ],
//   leftOver: 5,
//   totalProfit: 7500000 },
// { product: 'Baju Zoro',
//   shoppers: [],
//   leftOver: 2,
//   totalProfit: 0 },
// { product: 'Sweater Uniklooh',
//   shoppers: [],
//   leftOver: 1,
//   totalProfit: 0 } ]

console.log(countProfit([{
  name: 'Windi',
  product: 'Sepatu Stacattu',
  amount: 8,
}, {
  name: 'Vanessa',
  product: 'Sepatu Stacattu',
  amount: 10,
}, {
  name: 'Rani',
  product: 'Sweater Uniklooh',
  amount: 1,
}, {
  name: 'Devi',
  product: 'Baju Zoro',
  amount: 1,
}, {
  name: 'Lisa',
  product: 'Baju Zoro',
  amount: 1,
}]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: [ 'Windi' ],
//     leftOver: 2,
//     totalProfit: 12000000 },
//   { product: 'Baju Zoro',
//     shoppers: [ 'Devi', 'Lisa' ],
//     leftOver: 0,
//     totalProfit: 1000000 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [ 'Rani' ],
//     leftOver: 0,
//     totalProfit: 175000 } ]
console.log(countProfit([{
  name: 'Windi',
  product: 'Sepatu Naiki',
  amount: 5,
}]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: [],
//     leftOver: 10,
//     totalProfit: 0 },
//   { product: 'Baju Zoro',
//     shoppers: [],
//     leftOver: 2,
//     totalProfit: 0 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [],
//     leftOver: 1,
//     totalProfit: 0 } ]
console.log(countProfit([])); //[]