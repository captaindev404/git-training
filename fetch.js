const postData = async (url) => {
  return fetchData(url, {method: 'post'})
}

const fetchData = async (url, options) => {
  return fetch(url,options)
}
