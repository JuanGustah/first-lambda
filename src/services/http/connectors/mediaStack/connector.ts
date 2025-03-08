import { HttpClient } from "../../client";
import { IMediaStackGetQuerieParams } from "./interfaces/getQuerieParams";

class MediaStackConnector {
  private api: HttpClient;
  private accessKey: string;

  constructor() {
    this.api = new HttpClient("https://api.mediastack.com/v1");
    this.accessKey = process.env.MEDIA_STACK_ACCESS_KEY || "";
  }

  public get(
    url: string,
    querieParams?: IMediaStackGetQuerieParams,
    headers?: Record<string, string>
  ) {
    return this.api.get(
      url,
      {
        ...querieParams,
        access_key: this.accessKey,
      },
      headers
    );
  }
}

export const mediaStackConnector = new MediaStackConnector();
