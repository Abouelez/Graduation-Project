

import axios from 'axios';

const useGetData = async (url, params) => {
  const response = await axios.get(url, { params });
  return response.data;
}

export default useGetData;