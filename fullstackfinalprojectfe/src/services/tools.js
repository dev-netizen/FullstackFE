import axiosInstance from './interceptor';

class APIResult {
  data = [];

  success = true;

  message = '';
}

export const wrap = async (fn) => {
  let response = new APIResult();
  try {
    const result = await fn();
    response = result;
  } catch (error) {
    response.success = false;
  }
  return response;
};

export const httpRequest = async (url, method, body) => {
  return axiosInstance({
    url,
    method,
    data: body,
  });
};
