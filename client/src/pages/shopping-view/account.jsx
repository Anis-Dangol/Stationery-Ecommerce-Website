
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AccountImg from "../../assets/AccountImg.jpg"
import Address from "@/components/shopping-view/address";
import ShoppingOrders from "@/components/shopping-view/orders";



function ShoppingAccount() {
    return ( 
        <div className="flex flex-col bg-[#E6E0D3]">
            <div className="relative h-[350px] w-full overflow-hidden">
                <img
                    src={AccountImg}
                    className="h-[300px] w-full object-cover object-center"
                />
            </div>
            <div className="container mx-auto grid grid-cols-1 gap-8 py-8 ">
                <div className="flex flex-col rounded-lg border bg-[#E6E0D3] p-6 shadow-sm bg-[#E6E0D3] border-[#070f18]">
                    <Tabs defaultValue="orders">
                        <TabsList className="bg-[#070f18] text-[#E6E0D3]">
                            <TabsTrigger value="orders">Orders</TabsTrigger>
                            <TabsTrigger value="address">Address</TabsTrigger>
                        </TabsList>
                        <TabsContent value="orders">
                            <ShoppingOrders/>
                        </TabsContent>
                        <TabsContent value="address">
                            <Address/>
                        </TabsContent>
                    </Tabs>
                </div>
            </div>
        </div>
     );
}

export default ShoppingAccount;