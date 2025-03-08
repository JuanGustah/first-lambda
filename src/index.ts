import { Handler } from "aws-lambda";
import { GetNews } from "./domain/news/getNews";

export const handler: Handler = async (event, context) => {
  console.log(`Event: ${JSON.stringify(event, null, 2)}`);

  console.log("Buscando noticias...");

  const getNews = new GetNews();
  const news = await getNews.execute();

  console.log("Noticias encontradas:", JSON.stringify(news));

  console.log("Encerrando função...");
  return "teste";
};
