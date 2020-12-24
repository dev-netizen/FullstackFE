import { httpRequest, wrap } from './tools';

export const login = async (params) => {
  const fn = async () => {
    const url = `/api/login`;
    const response = await httpRequest(url, 'POST', params);

    return response.data;
  };

  return wrap(fn);
};
