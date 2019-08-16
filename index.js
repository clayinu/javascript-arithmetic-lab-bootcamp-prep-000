var a, b 

function add(a, b) {
  var result = a + b 
  return result
}

function subtract(a, b) {
  var result = a - b 
  return result
}

function multiply(a, b) {
  var result = a * b 
  return result
}

function divide(a, b) {
  var result = a / b 
  return result
}

function inc(n) {
  return n++
}

function dec(n) {
  return n--
}

function makeInt(n) {
  parseInt(n)
  return n
  parseInt(n, 10)
  return n
  parseInt('nonsense', 10)
  return n
}

function preserveDecimal(n) {
  parseInt(2.222, 10)
  return n
  parseInt('sldkjflksjf', 10)
  return n
}