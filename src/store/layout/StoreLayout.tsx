import { Outlet } from "react-router"
import { CustomHeader } from "../../shared/components/CustomHeader"

export const StoreLayout = () => {
    return (
        <div className="min-h-screen bg-background">

            <Outlet />
        </div>
    )
}
