import { Handler } from "aws-lambda";

export const handler: Handler = async (event, context) => {
  console.log(`Event: ${JSON.stringify(event, null, 2)}`);
  console.log("Encerrando função...");
  return "teste";
};
