import { Outlet } from "react-router-dom";


function AuthLayout() {
    return (
        <div className="flex min-h-screen w-full">
            <div className="hidden lg:flex items-center justify-center bg-[#070f18] w-1/2 px-12">
                <div className="max-w-md space-y-6 text-center text-primary-foreground">
                    <h1 className="text-4xl font-extrabold tracking-tight text-[#E6E0D3]">
                        Welcome To 
                    </h1>
                    <h1 className="text-4xl font-extrabold tracking-tight text-[#E6E0D3]">
                        Sab Ko Stationary
                    </h1>
                </div>
            </div>
            <div className="flex flex-1 items-center justify-center bg-[#E6E0D3] px-4 py-12 sm:px-6 lg:px-8">
                <Outlet />
            </div>
        </div>
    )
}

export default AuthLayout;