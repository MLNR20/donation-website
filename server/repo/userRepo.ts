import iUserRepo from "../interfaces/iUserRepo";
import User from "../models/user";
import GenericRepo from "./genericRepo";

export default class UserRepo extends GenericRepo<any> implements iUserRepo {
	constructor() {
		super(User);
	}

	async createUser(userData: any): Promise<any> {
		return this.create(userData);
	}

	async getUserById(userId: string): Promise<any> {
		return this.findById(userId);
	}

	async getUserByEmail(email: string): Promise<any> {
		return User.findOne({ email }).exec();
	}

	async checkUserExists(email: string): Promise<boolean> {
		return Boolean(await User.exists({ email }));
	}

	async checkIfActiveUser(userId: string): Promise<boolean> {
		return Boolean(await User.exists({ _id: userId, isActive: true }));
	}

	async updateUser(userId: string, userData: any): Promise<any> {
		return this.update(userId, userData);
	}

	async deleteUser(userId: string): Promise<void> {
		await this.delete(userId);
	}
}