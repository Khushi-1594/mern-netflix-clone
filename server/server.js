import express from 'express';
import authRoutes from "./routes/authRoutes.js"
import movieRoutes from "./routes/movieRoutes.js"
import tvShowRoutes from "./routes/tvShowRoutes.js"
import searchRoute from "./routes/searchRoute.js"
import { ENV_VARS } from './config/envVars.js';
import { connectDB } from './config/db.js';
import cookieParser from 'cookie-parser';
import { protectRoute } from './middleware/protectRoute.js';
import path from "path";
import cors from 'cors';

const app = express()
const PORT = ENV_VARS.PORT
app.use(express.json());
app.use(cookieParser());
app.use(cors())

const __dirname = path.resolve();

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/movie",protectRoute, movieRoutes);
app.use("/api/v1/tv", protectRoute,tvShowRoutes);
app.use("/api/v1/search", protectRoute, searchRoute);

if (ENV_VARS.NODE_ENV === "production") {
	app.use(express.static(path.join(__dirname, "/client/dist")));

	app.get("*", (req, res) => {
		res.sendFile(path.resolve(__dirname, "client", "dist", "index.html"));
	});
}


app.listen(PORT, ()=>{
    console.log(`Server listening to port ${PORT}`);
    connectDB();
})
