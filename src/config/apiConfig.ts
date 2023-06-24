import APIWrapper from "src/services/ApiServices/apiService";

const Bearer = localStorage.getItem('_platform_access_token');

export const PlatformAPI = new APIWrapper({
  baseURL: 'example.com/api/v1',
  options: {},
  bearerToken: Bearer
})