import { Search, ShoppingBag, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
export const CustomHeader = () => {
    const [cartCount] = useState(0);
    const [sesion] = useState('Inicia sesión  ')
    return <header className="sticky top-0 z-50 w-full border-b backdrop-blur bg-slate-50">
        <div className="container mx-auto px-4 lg:px-8">
            <div className="flex h-16 items-center justify-between">
                {/* Logo */}
                <div className="flex items-center space-x-4">
                    <a href="#/" >
                        <img src="./src/assets/img/logo-black.png" className="pl-5 w-60 h-30" alt="TechStore Logo" />
                    </a>
                    <Button variant="ghost" size="icon" className="md:hidden">
                        <Menu className="h-5 w-5" />
                    </Button>
                </div>

                {/* Navigation - Desktop */}
                <nav className="hidden md:flex items-center space-x-8">
                    <a href="#" className="text-sm font-medium transition-colors hover:text-primary">
                        Menu
                    </a>
                    <a href="#" className="text-sm font-medium transition-colors hover:text-primary">
                        Catalogo
                    </a>
                </nav>
                <div className="flex items-center space-x-4 pl-9 w-64 h-9" >
                    <div className="text-sm font-medium transition-colors hover:text-primary">
                        Hola,<br />
                        <strong> <a href="#/login">{sesion}</a> </strong>
                    </div>
                </div>

                {/* Search and Cart */}
                <div className="flex items-center space-x-4">
                    <div className="hidden md:flex items-center space-x-2">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                            <Input placeholder="Buscar productos..." className="pl-12 w-84 h-9" />
                        </div>
                    </div>

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
    </header>;
};
