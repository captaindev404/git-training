const fullName = (first, last) => {
  return `${first} -  ${last}`
}

const capitalize = (text) => {
    return capitalize.toUpperCase()
}
const formatDate = (dateString) => {
  if(dateString === '') {
    return new Date()
  }
  if (dateString == null) {
    throw new Error('datestring cannot be null')
  }
  return new Date(dateString)
}

const isPositiveNumber = (num) => {
  return num > 0;
}

const add = (a,b) => {
    return a + b;
}

const sum = (a,b) => {
    return a * b;
}

const div = (a, b) => {
    return a / b;
}

