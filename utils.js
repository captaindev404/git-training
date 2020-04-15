const fullName = (first,last) => {
    return `${first} -  ${last}`
}

const formatDate = (dateString) => {
    if(dateString === null || dateString === undefined) {
        return new Date()
    }
    return new Date(dateString)
}
