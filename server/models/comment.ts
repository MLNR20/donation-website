import mongoose from "mongoose";

interface IComment extends mongoose.Document {
    user_id: mongoose.Types.ObjectId;
    cause_id: mongoose.Types.ObjectId;
    content: string;
    createdAt: Date;
}

const commentSchema = new mongoose.Schema<IComment>({
    user_id: { type: mongoose.Types.ObjectId, ref: 'User', required: true },
    cause_id: { type: mongoose.Types.ObjectId, ref: 'Cause', required: true },
    content: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});

export default mongoose.model<IComment>("Comment", commentSchema);