import baseUrl from '../Api/baseURL'


// const useInsertDataWithImage = async (url, params, config = {}) => {

//     console.log(params);
//     let accessToken=localStorage.getItem('token');
//     const defaultConfig = {
//         headers: {
//             'Authorization': `Bearer ${accessToken}`,
//             'Content-Type': `multipart/form-data`,
//             ' Accept': `application/json`
//           }
//         };
//     const mergedConfig = { ...defaultConfig, ...config };
//     const res = await baseUrl.post(url, params, mergedConfig);
//     console.log(res.status);
//     return res;
//   };

    
const useInsertDataWithImage = async (url, parmas) => {
    const config={
        headers:{"Content-Type":"multipart/form-data"}
    }
    const res = await baseUrl.post(url, parmas ,config);
    console.log(res.status)
    return res;
}


const useInsertData = async (url, parmas) => {
    const res = await baseUrl.post(url, parmas);
    return res;
}

export { useInsertData, useInsertDataWithImage };