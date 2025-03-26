import mongoose from 'mongoose';

const LikeSchema = new mongoose.Schema({
  postSlug: {
    type: String,
    required: true,
    unique: true,
  },
  likes: {
    type: Number,
    default: 0,
  },
}, { timestamps: true });

export default mongoose.models.Like || mongoose.model('Like', LikeSchema); 