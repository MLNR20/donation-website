// AuthService.ts
//CREATE A SERVICE FOR AUTHENTICATION AND AUTHORIZATION
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import  iUserRepo  from "../interfaces/iUserRepo";
import iAuthService from "../interfaces/iAuthService";

export class AuthService implements iAuthService {
    private userRepo: iUserRepo;

    constructor(userRepo: iUserRepo) {
        this.userRepo = userRepo;
    }
    

    async logout(token: string): Promise<void> {
        // Implement logout logic here
        // For example, you can invalidate the token by adding it to a blacklist or removing it from 
        throw new Error("Method not implemented.");
    }

    async googleLogin(token: string): Promise<string> {

        //implement google login logic here




        throw new Error("Method not implemented.");
    }

    async verifyToken(token: string): Promise<any> {
        try {
            const secret = process.env.JWT_SECRET;
            if (!secret) {
                throw new Error("JWT_SECRET is not configured");
            }
            const decoded = jwt.verify(token, secret);
            return decoded;
        } catch (error) {
            throw new Error("Invalid token");
        }       
    }

    async register(userData: any): Promise<any> {
        if (await this.userRepo.checkUserExists(userData.email)) {
            throw new Error("Email already registered");
        }

        const password = await bcrypt.hash(userData.password, 12);
        return this.userRepo.createUser({ ...userData, password });
    }
    async login(email: string, password: string): Promise<string> {
        const user = await this.userRepo.getUserByEmail(email);
        if (!user || !(await bcrypt.compare(password, user.password))) {
            throw new Error("Invalid credentials");
        }

        const secret = process.env.JWT_SECRET;
        if (!secret) {
            throw new Error("JWT_SECRET is not configured");
        }

        const token = jwt.sign({ userId: user.id }, secret, { expiresIn: "1h" });
        return token;
    }
}