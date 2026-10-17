import mongoose from "mongoose";

interface ILike extends mongoose.Document {
    userId: mongoose.Types.ObjectId;
    causeId: mongoose.Types.ObjectId;
    likedAt: Date;
    isLiked: boolean;
    createdAt: Date;
    updatedAt: Date;
}

const likeSchema = new mongoose.Schema<ILike>({
    userId: { type: mongoose.Types.ObjectId, ref: 'User', required: true },
    causeId: { type: mongoose.Types.ObjectId, ref: 'Cause', required: true },
    likedAt: { type: Date, default: Date.now },
    isLiked: { type: Boolean, default: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
}); 

export default mongoose.model<ILike>("Like", likeSchema);