const GET_METHOD = 'get'
const DELETE_METHOD = 'delete';
const POST_METHOD = 'post'

const postData = async (url ) => {
  return fetchData(url, { method: POST_METHOD});
}

const deleteData = async (url) => {
  return fetchData(url, {method: DELETE_METHOD})
}

const fetchData = async (url, options) => {
  return fetch(url,options)
}
