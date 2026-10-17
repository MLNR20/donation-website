import mongoose from "mongoose";    

export interface IRole extends mongoose.Document {
    name: string;
    permissions: string[];
    isActive: boolean;
}

const roleSchema = new mongoose.Schema<IRole>({
    name: { type: String, required: true, unique: true },
    permissions: { type: [String], required: true },
    isActive: { type: Boolean, default: true }
});


export default mongoose.model<IRole>("Role", roleSchema);