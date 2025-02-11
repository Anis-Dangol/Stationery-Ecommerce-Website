import mongoose from "mongoose";

const ProductReviewSchema = new mongoose.Schema(
  {
    productId: String,
    userId: String,
    userName: { type: String, required: true },
    reviewMessage: String,
    reviewValue: Number,
  },
  { timestamps: true }
);

const ProductReview = mongoose.model("ProductReview", ProductReviewSchema);
export default ProductReview;