const fullName = (first,last) => {
    return `${first} -  ${last}`
}

const formatDate = (dateString) => {
    if(dateString == null){
        throw new Error('datestring cannot be null')
    }
    return new Date(dateString)
}
