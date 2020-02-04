function digPow(n, p){
    let sum = n.toString().split('').reduce((acc, curVal) => {
        return acc + (curVal ** p++)
    }, 0)
    return sum % n === 0 ? sum / n : -1
}

digPow(695, 2)
  