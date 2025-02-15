import { Outlet } from "react-router-dom";
import { ShoppingHeader } from "./header";




function ShoppingLayout() {
    return ( 
        <div className="flex flex-col bg-[#E6E0D3] overflow-hidden">
            {/* common header */}
            <ShoppingHeader/>
            <main className="flex flex-col w-full">
                <Outlet/>
            </main>
        </div>
     );
}

export default ShoppingLayout;