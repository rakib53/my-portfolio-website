const mongoose = require("mongoose");
const config = require("./config");
const logger = require("./logger");

const connectMongoDB = async () => {
  try {
    logger.info(config.database_url);
    await mongoose.connect(config.database_url);
    console.log(`MongoDb is connected to: ${config.database_url}`);
  } catch (err) {
    logger.error(err);
    console.log(err);
  }
};

connectMongoDB();
