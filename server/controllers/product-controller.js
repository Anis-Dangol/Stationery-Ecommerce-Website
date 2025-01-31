import Product from '../models/Product.js';

// Add Product
export const addProduct = async (req, res) => {
    const { title, description, category, sub_category, price, salePrice, totalStock } = req.body;

    if (!title || !description || !category || !price || !totalStock) {
        return res.status(400).json({
            success: false,
            message: "All required fields must be filled",
        });
    }

    try {
        const newProduct = new Product({
            title,
            description,
            category,
            sub_category,
            price,
            salePrice,
            totalStock,
        });

        await newProduct.save();
        res.status(200).json({
            success: true,
            message: "Product added successfully",
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Error in adding product",
        });
    }
};
