import { mediaStackConnector } from "../../services/http/connectors/mediaStack/connector";

import { getNewsConfig } from "./getNewsConfig";

export class GetNews {
  public async execute() {
    try {
      const { data: news } = await mediaStackConnector.get(
        "/news",
        getNewsConfig
      );

      if (news.pagination.count === 0) {
        return [];
      }

      return news.data;
    } catch (error) {
      console.log("Erro ao buscar Noticias!");

      return [];
    }
  }
}
