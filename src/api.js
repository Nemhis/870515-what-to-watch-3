import axios from 'axios';

const Error = {
  UNAUTHORIZED: 401,
};

const TIMEOUT = 5000;

export const createAPI = (onUnauthorized) => {
  const api = axios.create({
    baseURL: `https://htmlacademy-react-3.appspot.com/wtw`,
    timeout: TIMEOUT,
    withCredentials: true,
  });

  const onSuccess = (response) => response;

  const onFail = (error) => {
    const {response} = error;

    if (response.status === Error.UNAUTHORIZED) {
      onUnauthorized();
    }

    throw error;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};
