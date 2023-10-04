import axios from "axios";
import { CreateApiData } from "../types/api";

export const createNewApiKey = async () => {
  const { data } = await axios.get("/api/api-key/create");

  if (data.error || !data.createdApiKey) {
    if (data.error instanceof Array) {
      throw new Error(data.error.join(""));
    }
    throw new Error(data.error);
  }

  return data.createdApiKey.key;
};
