const PUT_METHOD = 'put';
const GET_METHOD = 'get'
const OPTIONS_METHOD = 'options';
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
const putData = async (url) => {
  return fetchData(url, { method: PUT_METHOD})

}
const optionsData = async (url) => {
  return fetchData(url, { method: OPTIONS_METHOD})
}
