import express from "express";
import cors from "cors";
import { apiError } from "../middlewares/ApiError.js";

const app = express();

// Handling CORS origin
if (process.env.NODE_ENV === "local") {
  app.use(
    cors({
      origin: process.env.LOCAL_ORIGIN,
      credentials: true,
    })
  );
} else {
  app.use(
    cors({
      origin: "*",
      credentials: true,
      methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    })
  );
}

// Using Express Middlewares
app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))


// Routes Import
import userRouter  from  "../src/routes/user.route.js"



//Routes Declaration
app.use("/api", userRouter )



// Handling error useing middleware
app.use(apiError)


export { app };
