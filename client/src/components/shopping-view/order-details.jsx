
import { useSelector } from "react-redux";
import { Badge } from "../ui/badge";
import { DialogContent } from "../ui/dialog";
import { Label } from "../ui/label";
import { Separator } from "../ui/separator";



function ShoppingOrderDetailsView({orderDetails}) {

    const user = useSelector(state => state.auth?.user);

    return ( 
        <DialogContent className="sm:max-w-[600px] bg-[#E6E0D3]">
            <div className="grid gap-6">
                <div className="grid gap-2">
                    <div className="flex mt-6 items-center justify-between">
                        <p className="font-medium">Order ID</p>
                        <Label>{orderDetails?._id}</Label>
                    </div>
                    <div className="flex mt-2 items-center justify-between">
                        <p className="font-medium">Order Date</p>
                        <Label>{orderDetails?.orderDate.split('T')[0]}</Label>
                    </div>
                    <div className="flex mt-2 items-center justify-between">
                        <p className="font-medium">Order Price</p>
                        <Label>Rs. {orderDetails?.totalAmount}</Label>
                    </div>
                    <div className="flex mt-2 items-center justify-between">
                        <p className="font-medium">Payment Method</p>
                        <Label>{orderDetails?.paymentMethod}</Label>
                    </div>
                    <div className="flex mt-2 items-center justify-between">
                        <p className="font-medium">Payment Status</p>
                        <Label>{orderDetails?.paymentStatus}</Label>
                    </div>
                    <div className="flex mt-2 items-center justify-between">
                        <p className="font-medium">Order Status</p>
                        <Label>
                            <Badge className={`py-1 px-3 ${orderDetails?.orderStatus === "confirmed" || orderDetails?.orderStatus === "delivered"
                                ? "bg-green-500" 
                                : orderDetails?.orderStatus === "rejected" ? 'bg-red-500'
                                : "bg-black"}`}>
                                {orderDetails?.orderStatus}
                            </Badge>
                        </Label>
                    </div> 
                </div>
                <Separator className="bg-[#070f18]"/>
                <div className="grid gap-4">
                    <div className="grid gap-2">
                        <div className="font-medium">Order Details</div>
                        <ul className="grid gap-3">
                            {
                                <li className="flex items-center justify-between font-bold">
                                    <span>Title </span>
                                    <span className="pl-8">Quantity</span>
                                    <span className="pr-2">Price</span>
                                </li>
                            }
                            {
                                orderDetails?.cartItems && orderDetails?.cartItems.length > 0 ?
                                orderDetails?.cartItems.map((item) => (
                                    <li className="flex items-center justify-between">
                                        <span className="cursor-pointer truncate w-40" title={item.title}>{item.title}</span>
                                        <span className="pr-8">{item.quantity}</span>
                                        <span>Rs. {item.price}</span>
                                    </li>
                                )) : null
                            }
                        </ul>
                    </div>
                </div>
                <Separator className="bg-[#070f18]"/>
                <div className="grid gap-4">
                    <div className="grid gap-2">
                        <div className="font-medium">Shipping Info</div>
                        <div className="grid gap-0.5 text-muted-foreground font-semibold">
                            <span>Name: {user.userName}</span>
                            <span>Address: {orderDetails?.addressInfo?.address}</span>
                            <span>City: {orderDetails?.addressInfo?.city}</span>
                            <span>Pincode: {orderDetails?.addressInfo?.pincode}</span>
                            <span>Phone: {orderDetails?.addressInfo?.phone}</span>
                            <span>Notes: {orderDetails?.addressInfo?.notes}</span>
                        </div>
                    </div>
                </div>
            </div>
        </DialogContent>
     );
}

export default ShoppingOrderDetailsView;