import request from "./axiosInstance";

// TODO — four one-line wrappers over the axios instance: get, post, put, del.
// Signatures to match (so productApi.js reads cleanly):
//   get(url, params, headers)
//   post(url, body, params, headers)
//   put(url, body, params, headers)
//   del(url, params, headers)
// Note axios takes `params` and `headers` inside a config object, and that for
// post/put the body is the 2nd positional arg while config is the 3rd.


export const get = (url, params, headers) => request.get(url, { params, headers });
export const post = (url, body, params, headers) => request.post(url, body, { params, headers });
export const put = (url, body, params, headers) => request.put(url, body, { params, headers });
export const del= (url, params, headers) => request.delete(url, { params, headers });