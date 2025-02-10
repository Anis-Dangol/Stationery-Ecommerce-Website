

import Order from "../../models/Order.js";



export const getAllOrderOfAllUsers = async (req, res) => {
    try {
        
        const orders = await Order.find({});

        if(!orders.length) {
            return res.status(404).json({
                success: false,
                message: "No orders found",
            })
        }

        res.status(200).json({
            success: true,
            data: orders,
            message: "All orders fetched successfully",
        })

        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Error in getting all orders by user",
        })
    }
}


export const getOrderDetailsForAdmin = async (req, res) => {
    try {
        const {id} = req.params;

        const order = await Order.findById(id);

        if(!order) {
            return res.status(404).json({
                success: false,
                message: "Order not found",
            })
        }

        res.status(200).json({
            success: true,
            data: order,
            message: "Order details fetched successfully",
        })
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Error in getting order details",
        })
    }
}

export const updateOrderStatus = async (req, res) => {
    try {
        const {id} = req.params;
        const {orderStatus} = req.body;

        const order = await Order.findById(id);

        if(!order) {
            return res.status(404).json({
                success: false,
                message: "Order not found",
            })
        }

        await Order.findByIdAndUpdate(id, {orderStatus})

        res.status(200).json({
            success: true,
            message: "Order status updated successfully",
        })
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Error in updating order status",
        })
        
    }
}

