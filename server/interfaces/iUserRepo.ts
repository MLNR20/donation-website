

export default interface iUserRepo {
    createUser(userData: any): Promise<any>;
    getUserById(userId: string): Promise<any>;
    getUserByEmail(email: string): Promise<any>;
    checkUserExists(email: string): Promise<boolean>;
    checkIfActiveUser(userId: string): Promise<boolean>;
    updateUser(userId: string, userData: any): Promise<any>;
    deleteUser(userId: string): Promise<void>;
}