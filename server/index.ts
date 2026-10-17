import express, {Application} from "express";
import causeRouter from "./router/cause";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./router/route-v1/userRouter";

dotenv.config();


//create express variable for app
const app: Application = express();
const PORT: number = 3000;


app.use(express.json());
app.use("/api/v1/user", userRouter);
app.use("/api/cause", causeRouter);


//connect to the database
app.listen(PORT, () => 
  {

    if(mongoose.connection.readyState === 0){
            mongoose.connect(process.env.mongoDb as string)
            .then(() => {
                console.log("Connected to the database");
            }
            )
            .catch((err) => {
                console.log("Error connecting to the database", err);
            }
      );
    }
    console.log(`🚀 Server running at http://localhost:${PORT}`);
  });
