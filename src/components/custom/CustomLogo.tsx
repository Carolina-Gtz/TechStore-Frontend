import logo from "@/assets/img/logo-black.png";
import { Link } from "react-router";

export const CustomLogo = () => {
    return (
        <Link to="/">
            <img src={logo} className="pl-20 w-60 h-25  mt-0.5 ml-5" alt="TechStore Logo" />
        </Link>
    );
};
