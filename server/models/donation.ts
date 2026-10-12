import mongoose, { Schema, Document } from 'mongoose';

export interface IDonation extends Document {
  user_id: mongoose.Types.ObjectId;
  amount: number;
  donor: string;
  date: Date;
}

const donationSchema: Schema = new Schema({
  user_id: { type: mongoose.Types.ObjectId, ref: 'User', required: true },
  amount: { type: Number, required: true },
  donor: { type: String, required: true },
  date: { type: Date, default: Date.now }
}); 

export default mongoose.model<IDonation>('Donation', donationSchema);
