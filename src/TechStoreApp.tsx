import { RouterProvider } from "react-router"
import { appRouter } from "./app.router"

export const TechStoreApp = () => {
    return (
        <RouterProvider router={appRouter} />

    )
}
