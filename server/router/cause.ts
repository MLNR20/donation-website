import express, {Router} from "express";

const causeRouter: Router = express.Router();

causeRouter.get("/", (req, res) => {
  res.send("Cause route is working!");
});

export default causeRouter;