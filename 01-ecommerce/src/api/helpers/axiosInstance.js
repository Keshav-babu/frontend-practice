import axios from "axios";

// TODO 1 — create the shared axios instance.
//   baseURL  : the env var from .env (Vite exposes it on import.meta.env — not process.env)
//   headers  : JSON content-type
//   timeout  : something sane, e.g. 20000ms


// TODO 2 — RESPONSE interceptor.
//   Success path: pass the response straight through.
//   Error path:   reject, but with a predictable shape so every caller can rely on it.
//                 dummyjson returns { message: "..." } on 4xx; network failures and
//                 timeouts have no `response` at all. Normalise both into one object
//                 carrying at least a `status` and a human-readable `message`,
//                 then return a rejected promise with it.
//   Q to answer: why normalise here instead of in each saga's catch block?


const request = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: { "Content-Type": "application/json" },
  timeout: 20000,
});

//  Turn every failure into one predictable Error, whatever actually went wrong.
const normalizeError = (error) => {
  //  No `response` = the request never completed: timeout, DNS, offline, CORS.
  //  Reaching for error.response.status here is the classic crash.
  if (!error.response) {
    const message =
      error.code === "ECONNABORTED"
        ? "Request timed out. Please try again."
        : "Network error. Please check your connection.";
    const normalized = new Error(message);
    normalized.status = 0;
    normalized.cause = error;
    return normalized;
  }

  const { status, data } = error.response;
  //  dummyjson sends { message: "..." } on 4xx; other APIs vary, so always have a fallback.
  const normalized = new Error(data?.message || `Request failed (${status})`);
  normalized.status = status;
  normalized.data = data;
  normalized.cause = error;
  return normalized;
};

request.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(normalizeError(error))
);

export default request;
