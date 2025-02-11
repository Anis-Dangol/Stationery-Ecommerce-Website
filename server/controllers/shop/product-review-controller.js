import Order from '../../models/Order.js';
import Product from '../../models/Product.js';
import ProductReview from '../../models/Review.js';


export const addProductReview = async (req, res) => {
    try {
        const { 
            productId, 
            userId, 
            userName, 
            reviewMessage, 
            reviewValue 
        } = req.body;

        const order = await Order.findOne({
            userId,
            "cartItems.productId": productId,
            orderStatus: "confirmed",
        });
        
        if (!order) {
            return res.status(403).json({
                success: false,
                message: "You can only review products that you have purchased",
            });
        }

        const checkExistingReview = await ProductReview.findOne({
            productId,
            userId
        });

        if(checkExistingReview) {
            return res.status(400).json({
                success: false,
                message: "You have already reviewed this product",
            });
        }

        const newReview = new ProductReview({
            productId, userId, userName, reviewMessage, reviewValue
        })

        await newReview.save();

        const reviews = await ProductReview.find({productId});
        const totalReviewsLength = reviews.length;
        const averageReview = reviews.reduce((sum, reviewItem) => sum + reviewItem.reviewValue, 0) / totalReviewsLength;

        await Product.findByIdAndUpdate(productId, {averageReview});

        res.status(201).json({
            success: true,
            data: newReview,
        });

        console.log("Received review data:", req.body);

        
    } catch (error) {
        console.log(error);
        res.status(500).json({ 
            success: false,
            message: "Error in adding product review",
        });
    }
}

export const getProductReviews = async (req, res) => {
    try {
        const { productId } = req.params;
        const reviews = await ProductReview.find({productId});

        res.status(200).json({
            success: true,
            data: reviews,
        });
        
    } catch (error) {
        console.log(error);
        res.status(500).json({ 
            success: false,
            message: "Error in getting product review",
        });
    }
}