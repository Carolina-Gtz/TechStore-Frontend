import logo from "@/assets/img/logo-black.png";
import { Link } from "react-router";

export const CustomLogo = () => {
    return (
        <Link to="/" className="flex justify-center">
            <img
                src={logo}
                className="w-48 h-auto"
                alt="TechStore Logo"
            />
        </Link>

    );
};
