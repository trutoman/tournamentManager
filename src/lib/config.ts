import * as dotenv from "dotenv";

dotenv.config()

class Config {
  NODE_ENV: string = process.env.NODE_ENV || 'development'
  PORT: string = process.env.PORT || '3000'
}

const configuration : Config = new Config()

export default configuration
