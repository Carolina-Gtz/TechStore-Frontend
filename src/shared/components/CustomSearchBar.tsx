
import { useSearchParams } from "react-router";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export const CustomSearchBar = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    const handleSearch = (e) => {
        const value = e.target.value;

        searchParams.set("query", value);
        setSearchParams(searchParams);
    };

    return (
        <div className="hidden md:flex items-center space-x-2">
            <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

                <Input
                    placeholder="Buscar productos..."
                    className="pl-12 w-84 h-9"
                    onChange={handleSearch}
                />
            </div>
        </div>
    );
};
