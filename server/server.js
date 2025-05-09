import express from "express";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import cors from "cors"; 
import authRouter from "./routes/auth/auth-routes.js";
import adminProductsRouter from "./routes/admin/products-routes.js";
import adminOrderRouter from "./routes/admin/order-routes.js";

import shopProductsRouter from "./routes/shop/products-routes.js";
import shopCartRouter from "./routes/shop/cart-routes.js";
import shopAddressRouter from "./routes/shop/address-routes.js";
import shopOrderRouter from "./routes/shop/order-routes.js";
import shopSearchRouter from "./routes/shop/search-routes.js";
import shopReviewRouter from "./routes/shop/review-routes.js";

import commonFeatureRouter from "./routes/common/feature-routes.js";

// Create a database connection -> u can also
// Create a separate file for this and tehn import/use that file here

mongoose.connect('<ADD YOUR MONGODB CONNECTION STRING HERE>')
.then(() => console.log('MongoDB connected'))
.catch(error => console.log(error));

const app = express();
app.use(express.json());   // Required for parsing JSON in requests
const PORT = process.env.PORT || 5000;

app.use(
    cors({
        origin : 'http://localhost:5173',
        methods : ['GET', 'POST', 'PUT', 'DELETE'],
        allowedHeaders : [
            "content-type",
            'Authorization',
            'Cache-Control',
            'Expires',
            'Pragma',
        ],
        credentials : true,
    })
);

app.use(cookieParser());
app.use(express.json());
app.use("/api/auth", authRouter);
app.use("/api/admin/products", adminProductsRouter);
app.use("/api/admin/orders", adminOrderRouter);

app.use("/api/shop/products", shopProductsRouter);
app.use("/api/shop/cart", shopCartRouter);
app.use("/api/shop/address", shopAddressRouter);
app.use("/api/shop/order", shopOrderRouter);
app.use("/api/shop/search", shopSearchRouter);
app.use("/api/shop/review", shopReviewRouter);

app.use("/api/common/feature", commonFeatureRouter);

app.listen(PORT, () => console.log(`Server is now running on port ${PORT}`));


