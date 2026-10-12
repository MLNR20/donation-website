import mongoose, { Schema, Document } from 'mongoose';

export interface ICause extends Document {
    name: string;
    description: string;
    causeType: string;
    goal: number;
    raised: number;
    createdAt: Date;
}

enum causeType {
    "Education" = "Education",
    "Health" = "Health",
    "Environment" = "Environment",
    "Charity" = "Charity",
}

const causeSchema: Schema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    causeType: {type: String, enum: Object.values(causeType), required: true},
    goal: { type: Number, required: true },
    raised: { type: Number, default: 0 },
    on_draft: { type: Boolean, default: true },
    createdAt: { type: Date, default: Date.now },
    
});

export default mongoose.model<ICause>('Cause', causeSchema);