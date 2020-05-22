// Your goal in this kata is to implement a difference function,
// which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b, and return the new filtered list.

// FIRST TRY
// function arrayDiff(a, b) {
//   let newArr = [];

//   for (let i = 0; i < a.length; i++) {
//     if (!b.includes(a[i])) {
//       newArr.push(a[i]);
//     }
//   }
//   return newArr;
// }

// // SECOND TRY
// function arrayDiff(a, b) {
//   return a.filter((element) => !b.includes(element));
// }

// FINAL
const arrayDiff = (a, b) => a.filter(element => !b.includes(element))

