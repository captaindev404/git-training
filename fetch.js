import {DELETE_METHOD, OPTIONS_METHOD, POST_METHOD, PUT_METHOD} from './constats';


const optionsData = async (url) => {
  return fetchData(url, { method: OPTIONS_METHOD})
}
