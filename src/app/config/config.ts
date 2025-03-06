import dotenv from "dotenv";
import path from "path";
dotenv.config({ path: path.join((process.cwd(), ".env")) });

export default {
  port: process.env.PORT || 6001,
  mongodb_url: process.env.MONGODB_URL,
  scrict_key: process.env.SCRICT_KEY,
};
