import axios, { AxiosInstance } from "axios";

export class HttpClient {
  private api: AxiosInstance;

  constructor(private baseUrl: string) {
    this.api = axios.create({
      baseURL: this.baseUrl,
    });
  }

  public get(
    url: string,
    querieParams?: Record<string, string>,
    headers?: Record<string, string>
  ) {
    return this.api.get(url, {
      headers,
      params: querieParams,
    });
  }
}
