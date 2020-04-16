import {multiply} from './math';

const fullName = (first, last) => {
  return `${first} -  ${last}`
}

const capitalize = (text) => {
  return text.toUpperCase()
}

const tableize = (text) => {
  return text.split(' ')
}

const toLower = (text) => {
  return text.toLowerCase()
}

const formatDate = (dateString) => {
  if (dateString === '') {
    return new Date()
  }
  if (dateString == null) {
    throw new Error('datestring cannot be null')
  }
  return new Date(dateString)
}

export const calculateTax = (amount, rate) => {
  return multiply(amount, rate)
}
