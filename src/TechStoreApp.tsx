import { RouterProvider } from "react-router"
import { appRouter } from "./app.router"
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { QueryClient, QueryClientProvider, useQuery } from "@tanstack/react-query"
import { checkAuthAction } from "./auth/actions/check-auth.action";
import type { PropsWithChildren } from "react";

const queryClient = new QueryClient();

const CheckAuthProvider = ({ children }: PropsWithChildren) => {
    const { data, isLoading } = useQuery({
        queryKey: ['auth'],
        queryFn: checkAuthAction,
        retry: false,
        staleTime: 1000 * 60 * 5,
        refetchOnWindowFocus: true
    });

    if (isLoading) {
        return <h1>Cargando sesión...</h1>;
    }

    console.log('Auth data:', data);

    return children;
}

export const TechStoreApp = () => {

    return (
        <QueryClientProvider client={queryClient}>

            {/**Custom Provider */}
            <CheckAuthProvider>
                <RouterProvider router={appRouter} />
            </CheckAuthProvider>

            {/* The rest of your application */}
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>

    )
}
