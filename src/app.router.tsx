import { createBrowserRouter, Navigate } from "react-router";
import { StoreLayout } from "./store/layout/StoreLayout";
import { HomePages } from "./store/pages/home/HomePages";
import { ProductPage } from "./store/pages/product/ProductPage";
import { GenderPage } from "./store/pages/gender/GenderPage";
import { LoginPage } from "./auth/pages/login/LoginPage";
import { RegisterPage } from "./auth/pages/register/RegisterPage";
import { DashboardPage } from "./admin/pages/dashboard/DashboardPage";
import { AdminProductPage } from "./admin/pages/product/AdminProductPage";
import { AdminProductsPage } from "./admin/pages/products/AdminProductsPage";
import { lazy } from "react";


const AuthLayout = lazy(() => import('./auth/layouts/AuthLayout'))
const AdminLayout = lazy(() => import('./admin/layouts/AdminLayout'))

export const appRouter = createBrowserRouter([
    /**Public Routes */
    {
        path: '',
        element: <StoreLayout />,
        children: [
            {
                index: true,
                element: <HomePages />

            },
            {
                path: 'product/:idSlug',
                element: <ProductPage />
            },
            {
                path: 'gender/:gender',
                element: <GenderPage />
            },
        ]
    },
    /**Auth Rotes */
    {
        path: 'auth',
        element: <AuthLayout />,
        children: [
            {
                index: true,
                element: <Navigate to='/auth/login' />

            },
            {
                path: 'login',
                element: <LoginPage />
            },
            {
                path: 'register',
                element: <RegisterPage />
            },
        ]
    },
    /**Admin Routes */
    {
        path: '/admin',
        element: <AdminLayout />,
        children: [
            {
                index: true,
                element: <DashboardPage />

            },
            {
                path: 'products',
                element: <AdminProductsPage />,
            },
            {
                path: 'product/:id',
                element: <AdminProductPage />,
            },
        ]
    },
    {
        path: '*',
        element: <Navigate to="/" />,
    }

])