import { HousePlug, LogOut, Menu, ShoppingCart, User, UserCog } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { useDispatch, useSelector } from "react-redux";
import { shoppingViewHeaderMenuItems } from "@/config";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { logoutUser } from "@/store/auth-slice";
import { useState } from "react";
import UserCartWrapper from "./cart-wrapper";



function MenuItems() {
    return <nav className="flex flex-col mb-3 lg:mb-0 lg:items-center gap-6 lg:flex-row">
        {
            shoppingViewHeaderMenuItems.map((menuItem) => <Link className="text-sm font-medium" key={menuItem.id} to={menuItem.path}>{menuItem.label}</Link>)
        }
    </nav>
}

function HeaderRightContent() {
    const { user } = useSelector(state => state.auth);
    const [openCartSheet, setOpenCartSheet] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    function handleLogout() {
        dispatch(logoutUser());
    }

    return <div className="flex lg:items-center lg:flex-row flex-col gap-4">
        <Sheet open={openCartSheet} onOpenChange={() => setOpenCartSheet(false)}>
            <Button onClick={() => setOpenCartSheet(true)} variant="icon" size="icon">
                <ShoppingCart className="w-8 h-8" />
                <span className="sr-only">User cart</span>
            </Button>
            <UserCartWrapper />
        </Sheet>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Avatar className="bg-black">
                        <AvatarFallback className="bg-black text-white font-extrabold ">
                            {user?.userName[0].toUpperCase()}
                        </AvatarFallback>
                    </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent side="right" className="w-56">
                    <DropdownMenuLabel>
                        Logged in as {user?.userName}
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator/>
                    <DropdownMenuItem onClick={() => navigate('/shop/account')}>
                        <UserCog className="mr-2 h-4 w-4"/>
                        Account
                    </DropdownMenuItem>
                    <DropdownMenuSeparator/>
                    <DropdownMenuItem onClick={handleLogout}>
                        <LogOut className="mr-2 h-4 w-4"/>
                        Logout
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
    </div>
}


export function ShoppingHeader() {

    const {isAuthenticated, user } = useSelector(state => state.auth);
    console.log(user, 'useruseruser')

    return <header className="sticky top-0 z-40 w-full border-b bg-background pt-3 pb-3">
        <div className="flex h-1/6 items-center justify-between px-4 md:px-6">
            <Link to="/shop/home" className="flex items-center gap-2">
            <HousePlug className="h-10 w-10" />
            <span className="font-bold">Ecommerce</span>
            </Link>
            <Sheet>
                <SheetTrigger asChild>
                    <Button variant="outline" size="icon" className="lg:hidden">
                        <Menu className="h-6 w-6" />
                        <span className="sr-only">Toggle Header Main</span>
                    </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-full max-w-xs">
                    <MenuItems />
                    <HeaderRightContent />
                </SheetContent>
            </Sheet>
            <div className="hidden lg:block ">
                <MenuItems />
            </div>
            <div className="hidden lg:block">
                <HeaderRightContent />
            </div>
        

        </div>
    </header>
}
