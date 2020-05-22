// Your job is to write a function which increments a string, to create a new string.

//     If the string already ends with a number, the number should be incremented by 1.
//     If the string does not end with a number. the number 1 should be appended to the new string.

// Examples:

// foo -> foo1

// foobar23 -> foobar24

// foo0042 -> foo0043

// foo9 -> foo10

// foo099 -> foo100

// Attention: If the number has leading zeros the amount of digits should be considered.

// NOTE: Use `nmp run test` to see results

function incrementString(strng) {
  // return incrementedString
  
  let letterStr = ''
  let numberStr = ''
  
  for (let i = 0; i < strng.length; i++) {
    if (!Number(strng[i])) {
      letterStr += strng[i]
    } else {
      numberStr += strng[i]
    }
  }
  
  let addedValue = Number(numberStr) + 1;
  
  if (addedValue % 10 === 0 && letterStr[letterStr.length - 1] === '0') {
    letterStr = letterStr.slice(0, letterStr.length - 1)
  }
  
  if (letterStr[letterStr.length - 1] === '0' && addedValue === 1) {
   letterStr = letterStr.slice(0, letterStr.length - 1)
  }
  
  return letterStr + addedValue
}

// iterate, if !Number(value[i]) add to new string
// if so, push to number string

// return text string + number string + 1 || 1

module.exports = incrementString;
