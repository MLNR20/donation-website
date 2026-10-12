import express, {Application} from "express";
import causeRouter from "./router/cause";

//create express variable for app
const app: Application = express();
const PORT: number = 3000;

app.use(express.json());
app.use("/api/cause", causeRouter);

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
