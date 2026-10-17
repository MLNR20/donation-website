import mongoose from "mongoose";

interface IAudit extends mongoose.Document {
    action: string;
    userId: mongoose.Types.ObjectId;
    timestamp: Date;
}

const auditSchema = new mongoose.Schema<IAudit>({
    action: { type: String, required: true },
    userId: { type: mongoose.Types.ObjectId, ref: 'User', required: true },
    timestamp: { type: Date, default: Date.now }
});

export default mongoose.model<IAudit>("Audit", auditSchema);