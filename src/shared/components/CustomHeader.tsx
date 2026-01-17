import { ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { CustomLogo } from "@/components/custom/customLogo";
import { Link } from "react-router";
// import { Dialog, DialogContent, DialogTrigger } from "@radix-ui/react-dialog";
import { CustomSearchBar } from "./CustomSearchBar";
import { useAuthStore } from "@/auth/store/auth.store";


export const CustomHeader = () => {

    const [cartCount] = useState(0);

    const { authStatus, isAdmin, user, logout } = useAuthStore();

    return (

        <>
            <header className="sticky top-0 z-50 w-full border-b bg-slate-50 backdrop-blur">
                <div className="container mx-auto px-4">
                    <div className="flex h-16 items-center justify-between">

                        {/*  Logo */}
                        <div className="flex items-center">
                            <CustomLogo />
                        </div>

                        {/*  Search (desktop only) */}
                        <div className="hidden md:flex flex-1 justify-center px-6">
                            <CustomSearchBar />
                        </div>

                        {/* RIGHT */}
                        <div className="flex items-center gap-6">

                            {/* Navigation - Desktop */}
                            <nav className="hidden md:flex items-center gap-8">
                                <Link
                                    to="/product/:idSlug"
                                    className="text-sm font-medium transition hover:text-primary"
                                >
                                    Catálogo
                                </Link>
                                {isAdmin() && (
                                    <Link
                                        to="/admin"
                                        className="text-sm font-semibold text-red-900 underline underline-offset-4 decoration-gray-400 transition hover:text-black hover:decoration-gray-600"
                                    >
                                        Admin
                                    </Link>
                                )}
                            </nav>

                            {/* 🛒 Cart - always visible */}
                            <Button variant="ghost" size="icon" className="relative">
                                <ShoppingBag className="h-5 w-5" />
                                {cartCount > 0 && (
                                    <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center">
                                        {cartCount}
                                    </span>
                                )}
                            </Button>

                            {/* 👤 Auth */}
                            {(authStatus === 'not-authenticated') ? (
                                <Link
                                    to="/auth/login"
                                    className="flex flex-col text-sm leading-tight hover:text-primary"
                                >
                                    <span className="text-sm text-black-500">Hola, </span>

                                    {/* Desktop */}
                                    <strong className="hidden sm:block">
                                        Inicia sesión
                                    </strong>

                                    {/* Mobile */}
                                    <strong className="block sm:hidden">
                                        Entrar
                                    </strong>
                                </Link>
                            ) : (
                                <div className="flex flex-col text-sm leading-tight">
                                    <span className="text-sm text-black-500">Hola,</span>

                                    <div className="flex items-center gap-6">
                                        <strong className="font-semibold">
                                            {user?.fullName.split(" ")[0]}
                                        </strong>

                                        <button
                                            onClick={logout}
                                            className="text-sm font-medium text-gray-600 hover:underline"
                                        >
                                            Cerrar sesión
                                        </button>
                                    </div>
                                </div>
                            )}
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
