//for global variables

import dotenv from "dotenv"

dotenv.config()

//ENV_VARS is hardcoded it stores only those variables which we will not change in the project.
export const ENV_VARS={
    MONGO_URI : process.env.MONGO_URI,
    PORT: process.env.PORT || 5000,
    JWT_SECRET: process.env.JWT_SECRET,
    NODE_ENV: process.env.NODE_ENV,
    TMDB_API_KEY: process.env.TMDB_API_KEY
}