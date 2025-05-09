import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Dialog } from "../ui/dialog";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";
import ShoppingOrderDetailsView from "./order-details";
import { useDispatch, useSelector } from "react-redux";
import { getAllOrderByUserId, getOrderDetails, resetOrderDetails } from "@/store/shop/order-slice";
import { Badge } from "../ui/badge";




function ShoppingOrders() {

    const [openDetailsDialog, setOpenDetailsDialog] = useState(false);
    const dispatch = useDispatch();
    const user = useSelector(state => state.auth?.user);
    const orderList = useSelector(state => state.shopOrder?.orderList);
    const orderDetails = useSelector(state => state.shopOrder?.orderDetails);

    function handleFetchOrderDetails(getId) {
        dispatch(getOrderDetails(getId));
    }

    useEffect(() => {
        dispatch(getAllOrderByUserId(user?.id));
    }, [dispatch]);

    useEffect(() => {
        if(orderDetails !== null) {
            setOpenDetailsDialog(true);
        }
    }, [orderDetails]);


    console.log(orderDetails, "orderDetails");

    return ( 
        <Card className="bg-[#E6E0D3] border-[#070f18]">
            <CardHeader> 
                <CardTitle>
                    Order History
                </CardTitle>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow className="border-[#070f18]">
                            <TableHead>Order ID</TableHead>
                            <TableHead>Order Date</TableHead>
                            <TableHead>Order Status</TableHead>
                            <TableHead>Order Price</TableHead>
                            <TableHead>
                                <span className="sr-only">Details</span>
                            </TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {orderList && orderList.length > 0 ?
                            orderList.map(orderItem => 
                                <TableRow className="border-[#070f18]">
                                    <TableCell>{orderItem?._id}</TableCell>
                                    <TableCell>{orderItem?.orderDate.split('T')[0]}</TableCell>
                                    <TableCell>
                                        <Badge className={`py-1 px-3 ${orderItem?.orderStatus === "confirmed" || orderItem?.orderStatus === "delivered"
                                ? "bg-green-500" 
                                : orderItem?.orderStatus === "rejected" ? 'bg-red-500'
                                : "bg-black"}`}>
                                            {orderItem?.orderStatus}
                                        </Badge>
                                    </TableCell>
                                    <TableCell>Rs. {orderItem?.totalAmount}</TableCell>
                                    <TableCell>
                                        <Dialog open=           
                                        {openDetailsDialog} onOpenChange={() =>{ 
                                            setOpenDetailsDialog(false)
                                            dispatch(resetOrderDetails())
                                            }
                                        }>
                                        <Button onClick={() => handleFetchOrderDetails(orderItem?._id)}>View Details</Button>
                                        <ShoppingOrderDetailsView
                                        orderDetails={orderDetails}/>
                                        </Dialog>
                                    </TableCell>
                                </TableRow>
                            ): null
                        }
                        
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
     );
}

export default ShoppingOrders;