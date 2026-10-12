import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document {
  firstname: string;
  lastname: string;
  username: string;
  email: string;
  password: string;
  createdAt: Date;
  isActive: boolean;
}


const userSchema: Schema = new Schema({
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },    
    password: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    isActive: { type: Boolean, default: true }
}); 


export default mongoose.model<IUser>('User', userSchema);