import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, Method } from 'axios';

interface IAPIWrapperConstructor {
  baseURL : string,
  options: AxiosRequestConfig,
  bearerToken?: string | null
}


class APIWrapper {
  public service: AxiosInstance;

  constructor({baseURL, options, bearerToken} : IAPIWrapperConstructor) {
    const optHeaders = options?.headers || {};

    const headers: AxiosRequestConfig['headers'] = {
      'Content-Type': 'application/json',
      ...bearerToken && {Authorization : `Bearer ${bearerToken}`},
      ...optHeaders,
    };

    const defaultOptions: AxiosRequestConfig = {
      baseURL,
      headers,
      timeout: 30 * 1000,
    };

    const serviceOptions: AxiosRequestConfig = { ...defaultOptions, ...options };
    this.service = axios.create(serviceOptions);
  }

  request<T>(method: Method, url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.service.request<T>({ method, url, data, ...config });
  }

  get<T>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.request<T>('GET', url, undefined, config);
  }

  post<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.request<T>('POST', url, data, config);
  }

  put<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.request<T>('PUT', url, data, config);
  }

  patch<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.request<T>('PATCH', url, data, config);
  }

  delete<T>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.request<T>('DELETE', url, undefined, config);
  }

  // Add other HTTP methods as needed (e.g., head, options)
}

export default APIWrapper