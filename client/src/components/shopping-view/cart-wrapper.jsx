import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { SheetContent, SheetHeader, SheetTitle } from "../ui/sheet";
import UserCartItemsContent from "./cart-items-content";



function UserCartWrapper({cartItems, setOpenCartSheet}) {

    const navigate = useNavigate();

    const totalCartAmount =( 
        cartItems && cartItems.length > 0 
            ? cartItems.reduce(
                (sum, currentItem) => 
                    sum + 
                (currentItem?.salePrice > 0 
                ? currentItem?.salePrice 
                : currentItem?.price) * 
                currentItem?.quantity,
                0
            ) 
            : 0).toFixed(2);

    return (
        <SheetContent className="sm: max-w-md bg-[#E6E0D3] ">
            <SheetHeader>
                <SheetTitle>
                    Your Cart
                </SheetTitle>
            </SheetHeader>
            <div className="mt-8 space-y-4 bg-[#E6E0D3] text-[#070f18] rounded-lg p-2">
                {
                    cartItems && cartItems.length > 0 ? 
                    cartItems.map((item) => <UserCartItemsContent cartItem={item} />) : null
                }
            </div>
            <div className="mt-8 space-y-4">
                <div className="flex justify-between">
                    <span className="font-bold">Total</span>
                    <span className="font-bold">Rs.{totalCartAmount}</span>
                </div>
            </div>
            <Button onClick={() => {
                navigate('/shop/checkout');
                setOpenCartSheet(false);
            }} className="w-full mt-6">CheckOut</Button>
        </SheetContent>
    )
}

export default UserCartWrapper;