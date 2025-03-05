import mongoose from "mongoose";
import config from "./app/config/config";
import app from "./appp";

async function main() {
  try {
    await mongoose.connect(config.mongodb_url as string);
    app.listen(config.port, () => {
      console.log(`medicare app listening on port ${config.port}`);
    });
  } catch (error) {
    console.log(error);
  }
}

main();
