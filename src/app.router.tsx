import { lazy } from "react";
import { createHashRouter, Navigate } from "react-router";

import { StoreLayout } from "./store/layout/StoreLayout";
import { HomePages } from "./store/pages/home/HomePages";
import { ProductPage } from "./store/pages/product/ProductPage";
import { CategoryPage } from "./store/pages/category/CategoryPage";

import { LoginPage } from "./auth/pages/login/LoginPage";
import { RegisterPage } from "./auth/pages/register/RegisterPage";

import { DashboardPage } from "./admin/pages/dashboard/DashboardPage";
import { AdminProductPage } from "./admin/pages/product/AdminProductPage";
import { AdminProductsPage } from "./admin/pages/products/AdminProductsPage";
import { AdminProductCreatePage } from "./admin/pages/product/AdminProductCreatePage";
import { AdminProductUpdatePage } from "./admin/pages/product/AdminProductUpdatePage";

import { AdminRoute, NotAuthenticatedRoute } from "./components/routes/ProtectedRoutes";
import { AdminUsersPage } from "./admin/pages/users/AdminUsersPage";
import { AdminUserCreatePage } from "./admin/pages/user/AdminUserCreatePage";
import { AdminUserUpdatePage } from "./admin/pages/user/AdminUserUpdatePage";


const AuthLayout = lazy(() => import('./auth/layouts/AuthLayout'))
const AdminLayout = lazy(() => import('./admin/layouts/AdminLayout'))

// export const appRouter = createBrowserRouter([
export const appRouter = createHashRouter([
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
                path: 'categoria/:category',
                element: <CategoryPage />
            },
        ]
    },
    /**Auth Rotes */
    {
        path: 'auth',
        element:
            (<NotAuthenticatedRoute>
                <AuthLayout />
            </NotAuthenticatedRoute>),
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
        element:
            (<AdminRoute>
                <AdminLayout />
            </AdminRoute>),
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
            {
                path: 'products/new',
                element: <AdminProductCreatePage />,
            },
            {
                path: 'products/:id/edit',
                element: <AdminProductUpdatePage />,
            },
            {
                path: 'users',
                element: <AdminUsersPage />,
            },
            {
                path: 'users/new',
                element: <AdminUserCreatePage />,
            },
            {
                path: "users/:id/edit",
                element: <AdminUserUpdatePage />,
            },

        ]
    },
    {
        path: '*',
        element: <Navigate to="/" />,
    }

])