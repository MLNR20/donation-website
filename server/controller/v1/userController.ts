import { Request, Response } from "express";
import { AuthService } from "../../service/authService";
import UserRepo from "../../repo/userRepo";

const authService = new AuthService(new UserRepo());

export const getUser = async (req: Request, res: Response) => {
  res.json({ id: req.params.id });
};

export const getUserList = async (res: Response) => {

  try
  {
    
  }
  catch
  {

  }
}
export const createUser = async (req: Request, res: Response) => {
  const { firstname, lastname, username, email, password } = req.body ?? {};
  if (!firstname || !lastname || !username || !email || !password) {
    return res.status(400).json({ message: "All user fields are required" });
  }

  try {
    const user = await authService.register({ firstname, lastname, username, email, password });
    return res.status(201).json({
      id: user._id,
      firstname: user.firstname,
      lastname: user.lastname,
      username: user.username,
      email: user.email,
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Registration failed";
    const status = message === "Email already registered" ? 409 : 400;
    return res.status(status).json({ message });
  }
};

export const loginUser = async (req: Request, res: Response) => {
  const { email, password } = req.body ?? {};
  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required" });
  }

  try {
    const token = await authService.login(email, password);
    return res.status(200).json({ token });
  } catch {
    return res.status(401).json({ message: "Invalid email or password" });
  }
};