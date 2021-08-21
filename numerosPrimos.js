function numeroPrimo(num) {
  let divisor = 0
  for (let i = 0; i <= num; i++) {
    if (num % i == 0) {
      divisor++
    }
  }

  if (divisor == 2) {
    console.log
    return true
  }
}

if (num % num == 0) {
  return true
}
return false
