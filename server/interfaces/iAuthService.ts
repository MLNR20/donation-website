export default interface iAuthService {
    login(username: string, password: string): Promise<string>;
    register(userData: any): Promise<any>;
    googleLogin(token: string): Promise<string>;
    logout(token: string): Promise<void>;
    verifyToken(token: string): Promise<any>;
}