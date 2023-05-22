const calculate = (calculationSteps) => {
  // if array does not have any mathematical operators, return NaN
  if (calculationSteps.includes('+') === false && calculationSteps.includes('-') === false &&
  calculationSteps.includes('*') === false) {
    return NaN
  }

  // loop through array
  for (i = 0; i < calculationSteps.length; i++) {
    // if iteration equals null, reassign value to 0. if iteration equals word, remove from array
    if (calculationSteps[i] === null) {
      calculationSteps[i] = '0'
    } else if (calculationSteps[i] === 'foo' || calculationSteps[i] === 'bar') {
      calculationSteps.splice([i], 1)
    }
  }


  // bring components together, solve operation

  return eval(calculationSteps.join(''))
}

module.exports = calculate
