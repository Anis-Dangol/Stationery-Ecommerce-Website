import paypal from "../../helpers/paypal.js";
import Order from "../../models/Order.js";
import Cart from "../../models/Cart.js";
import Product from "../../models/Product.js";


export const createOrder = async (req, res) => {
    try {
        console.log("Paypal Object:", paypal);

        const {
            userId, 
            cartItems, 
            addressInfo, 
            orderStatus, 
            paymentMethod, 
            paymentStatus, 
            totalAmount, 
            orderDate, 
            orderUpdatedDate, 
            paymentId, 
            payerId,
            cartId
        } = req.body; // getting all this from information from the frontend

        const create_payment_json = {
            intent: "sale",
            payer: {
                payment_method: "paypal",
            },
            redirect_urls: {
                return_url: "http://localhost:5173/shop/paypal-return",
                cancel_url: "http://localhost:5173/shop/paypal-cancel",
            },
            transactions: [{
                item_list: {
                    items: cartItems.map(item => ({
                        name: item.title,
                        sku: item.productId,
                        price: item.price.toFixed(2),
                        currency: "USD",
                        quantity: item.quantity,
                    }))
                },
                amount: {
                    currency: "USD",
                    total: totalAmount.toFixed(2),
                },
                description : "This is the payment description",
            }]
        } // this is the json object that we are going to send to the paypal payment gateway

        paypal.payment.create(create_payment_json, async (error, paymentInfo) => {
            if (error) {
                console.log(error);
                return res.status(500).json({
                    success: false,
                    message: "Error in creating payment!!!",
                })
            } else {
                const newlyCreatedOrder = new Order({
                    userId,
                    cartId,
                    cartItems,
                    addressInfo,
                    orderStatus, // Default to 'pending' ==> : orderStatus || 'pending'
                    paymentMethod,
                    paymentStatus, // Default to 'pending'==> : paymentStatus || 'pending'
                    totalAmount,
                    orderDate,  //: orderDate || new Date()
                    orderUpdatedDate,   // : orderUpdatedDate || new Date()
                    paymentId,   //: paymentId || ''
                    payerId,   //: payerId || ''
                });
                await newlyCreatedOrder.save();

                const approvalURL = paymentInfo.links.find(link => link.rel === "approval_url").href;

                res.status(201).json({
                    success: true,
                    approvalURL,
                    orderId: newlyCreatedOrder._id,
                    message: "Order created successfully",
                })
            }
        }); // this is the paypal payment gateway

        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Error in creating order!!!",
        })
    }
}

export const capturePayment = async (req, res) => {
    try {
         
        const { paymentId, payerId, orderId } = req.body;

        let order = await Order.findById(orderId);

        console.log("Order:", order);

        if(!order) {
            return res.status(404).json({
                success: false,
                message: "Order not found",
            })
        }

        order.paymentStatus = 'paid';
        order.orderStatus = 'confirmed';
        order.paymentId = paymentId;
        order.payerId = payerId;

        for(let item of order.cartItems) {
            let product = await Product.findById(item.productId);

            if(!product) {
                return res.status(404).json({
                    success: false,
                    message: `Not enough stock for this product ${product.title}`,
                })
            }

            product.totalStock -= item.quantity;

            await product.save();

        }

        const getCartId = order.cartId;
        await Cart.findByIdAndDelete(getCartId);

        await order.save();

        res.status(200).json({
            success: true,
            data: order,
            message: "Order Confirm successfully",
        })
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Error in capturing Payment!!!",
        })
    }
}

export const getAllOrderByUser = async (req, res) => {
    try {

        const {userId} = req.params;
        
        const orders = await Order.find({ userId });

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

export const getOrderDetails = async (req, res) => {
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
