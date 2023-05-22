const calculate = (calculationSteps) => {
  // if array does not have any mathematical operators, return NaN
  if (calculationSteps.includes('+') === false && calculationSteps.includes('-') === false &&
  calculationSteps.includes('*') === false && calculationSteps.includes('/') === false) {
    return NaN
  }

  let newArray = []

  // loop through test array
  for (i = 0; i < calculationSteps.length; i++) {
    // if iteration equals null, reassign value to 0. if iteration equals operator or number, push it to new array
    if (calculationSteps[i] === null) {
      calculationSteps[i] = '0'
      newArray.push(calculationSteps[i])
    } else if (calculationSteps[i] === '+' || calculationSteps[i] === '-' || calculationSteps[i] === '*' || calculationSteps[i] === '/') {
      newArray.push(calculationSteps[i])
    } else if (isNaN(calculationSteps[i]) === false) {
      newArray.push(calculationSteps[i])
    }
  }

  // evaluate newArray
  return eval(newArray.join(''))
}


module.exports = calculate
