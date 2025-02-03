import express from "express";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import cors from "cors";
import authRouter from "./routes/auth/auth-routes.js";
import adminProductsRouter from "./routes/admin/products-routes.js";
import shopProductsRouter from "./routes/shop/products-routes.js";
import shopCartRouter from "./routes/shop/cart-routes.js";

// Create a database connection -> u can also
// Create a separate file for this and tehn import/use that file here

mongoose.connect('mongodb+srv://anisdangol121:bgnBFpOsRhscKDPY@e-commerce.1h459.mongodb.net/')
.then(() => console.log('MongoDB connected'))
.catch(error => console.log(error));

const app = express();
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
app.use("/api/shop/products", shopProductsRouter);
app.use("/api/shop/cart", shopCartRouter);

app.listen(PORT, () => console.log(`Server is now running on port ${PORT}`));


