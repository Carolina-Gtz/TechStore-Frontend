import { Search, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { CustomLogo } from "@/components/custom/customLogo";
import { Link } from "react-router";
import { LoginPage } from "@/auth/pages/login/LoginPage";
import { Dialog, DialogContent, DialogTrigger } from "@radix-ui/react-dialog";
import { CustomSearchBar } from "./CustomSearchBar";


export const CustomHeader = () => {
    const [cartCount] = useState(0);
    // const [showLogin, setShowLogin] = useState(false);

    return (

        <>
            <header className="sticky top-0 z-50 w-full border-b backdrop-blur bg-slate-50">
                <div className="container mx-auto px-4 lg:px-1">
                    <div className="flex h-16 items-center justify-between">

                        {/* Logo */}
                        <div
                        // className="mr-4"
                        >
                            <CustomLogo />
                        </div>

                        {/* Navigation - Desktop */}
                        <nav className="hidden md:flex items-center space-x-2">


                            <Link to='/admin' className="text-sm font-medium transition-colors hover:text-primary">
                                Menu
                            </Link>
                            <Link to='/product/:idSlug' className="text-sm font-medium transition-colors hover:text-primary">
                                Catalogo
                            </Link>
                        </nav>
                        {/* <Dialog>
                            <DialogTrigger asChild>
                                <button
                                // className="text-sm font-medium text-black hover:text-primary"
                                >
                                    Hola,<br />
                                    <strong>Inicia sesión</strong>
                                </button>
                            </DialogTrigger>

                            <DialogContent
                            // className="p-0 border-none bg-transparent shadow-none w-auto max-w-full"
                            >
                                <LoginPage />
                            </DialogContent>
                        </Dialog> */}


                        <div className="flex items-center space-x-4 pl-9 w-64 h-9" >
                            <div className="text-sm font-medium transition-colors hover:text-primary">
                                Hola,<br />
                                <strong>
                                    <Link to="/auth/login"
                                    // onClick={() => setShowLogin(true)}
                                    >
                                        Inicia sesión
                                    </Link> </strong>
                            </div>

                        </div>

                        {/* Search and Cart */}
                        <div className="flex items-center space-x-4">
                            <CustomSearchBar />

                            <Button variant="ghost" size="icon" className="md:hidden">
                                <Search className="h-5 w-5" />
                            </Button>

                            <Button variant="ghost" size="icon" className="relative">
                                <ShoppingBag className="h-5 w-5" />
                                {cartCount > 0 && <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center">
                                    {cartCount}
                                </span>}
                            </Button>
                        </div>
                    </div>
                </div>
            </header>

            {/* {showLogin && (
                <LoginPage onClose={() => setShowLogin(false)} />
            )} */}
        </>
    )
};
