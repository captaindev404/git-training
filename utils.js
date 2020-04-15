const fullName = (first, last) => {
  return `${first} -  ${last}`
}

const formatDate = (dateString) => {
  if (dateString === null || dateString === undefined) {
    throw new Error('datestring cannot be null')
  }
  return new Date(dateString)
}
