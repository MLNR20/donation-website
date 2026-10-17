import moongoose, { Document, Schema } from 'mongoose';

export interface IAdmin extends Document {
    username: string;
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    createdAt: Date;
    isActive: boolean;
}
