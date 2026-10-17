import express, { Router } from "express";
import { getUser, createUser, loginUser } from "../../controller/v1/userController";

const userRouter: Router = express.Router();

userRouter.get("/:id", getUser);
userRouter.post("/", createUser);
userRouter.post("/login", loginUser);

export default userRouter;