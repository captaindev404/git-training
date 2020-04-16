const GET_METHOD = 'get'
const POST_METHOD = 'post'

const postData = async (url ) => {
  return fetchData(url, { method: POST_METHOD});
}

const fetchData = async (url, options) => {
  return fetch(url,options)
}
