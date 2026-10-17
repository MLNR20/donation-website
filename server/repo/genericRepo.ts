import mongoose from "mongoose";

export class GenericRepo<T extends mongoose.Document> {
    private model: mongoose.Model<T>;

    constructor(model: mongoose.Model<T>) {
        this.model = model;
    }   


    async paginate(page: number, limit: number): Promise<{ data: T[]; totalPages: number; totalItems: number }> {
        const skip = (page - 1) * limit;
        const totalItems = await this.model.countDocuments();
        const totalPages = Math.ceil(totalItems / limit);
        const data = await this.model.find().skip(skip).limit(limit).exec();
        return { data, totalPages, totalItems };
    }

    async create(item: Partial<T>): Promise<T> {
        const newItem = new this.model(item);
        return await newItem.save();
    }

    async findById(id: string): Promise<T | null> {
        return await this.model.findById(id).exec();
    }   

    async findAll(): Promise<T[]> {
        return await this.model.find().exec();
    }

    async update(id: string, item: Partial<T>): Promise<T | null> {
        return await this.model.findByIdAndUpdate(id, item, { new: true }).exec();  
    }

    async delete(id: string): Promise<T | null> {
        return await this.model.findByIdAndDelete(id).exec();
    }
}

export default GenericRepo;