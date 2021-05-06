type Combinable = number | string
type ConversionDesc = 'as-text' | 'as-number'

function combine(
  input1: Combinable,
  input2: Combinable,
  resultConversion: ConversionDesc
) {
  let result
  if (
    (typeof input1 === 'number' && typeof input2 === 'number') ||
    resultConversion == 'as-number'
  ) {
    result = +input1 + +input2
  } else {
    result = input1.toString() + ' and ' + input2.toString()
}
  return result
  // if (resultConversion === 'as-number') {
  //     return +result
  //   } else {
  //     return result.toString()
  //   }
}

const combineStringAges = combine('20', '30', 'as-number')
console.log(combineStringAges)

const combinedAges = combine(30, 26, 'as-number')
console.log(combinedAges)

const combineNames = combine('Frank', 'Kay', 'as-text')
console.log(combineNames)

const combineLovers = combine('Kurt', 'Jane', 'as-text')
console.log(combineLovers)
