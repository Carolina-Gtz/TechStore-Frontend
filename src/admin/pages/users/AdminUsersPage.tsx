import { AdminTitle } from "@/admin/components/AdminTitle";
import { useDeleteUser } from "@/auth/hooks/useDeleteUser";
import { useUsers } from "@/auth/hooks/useUsers";
import { Button } from "@/components/ui/button";
import {
    Table,
    TableCaption,
    TableHeader,
    TableRow,
    TableHead,
    TableBody,
    TableCell,
} from "@/components/ui/table";
import { PlusIcon } from "lucide-react";
import { Link } from "react-router";

export const AdminUsersPage = () => {
    const { data: users, isLoading } = useUsers();
    const deleteUser = useDeleteUser()

    if (isLoading) {
        return <p>Cargando usuarios...</p>;
    }

    return (
        <>
            {/* HEADER */}
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-center mb-6">
                <AdminTitle
                    title="Usuarios"
                    subtitle="Administra los usuarios del sistema"
                />

                <Link to="/admin/users/new">
                    <Button className="w-full sm:w-auto">
                        <PlusIcon className="mr-2 h-4 w-4" />
                        Nuevo usuario
                    </Button>
                </Link>
            </div>

            {/* TABLE WRAPPER */}
            <div className="w-full overflow-x-auto">
                <Table className="min-w-[900px] bg-white shadow-xs border border-gray-200">
                    <TableCaption>Listado de usuarios</TableCaption>

                    {/* TABLE HEADER */}
                    <TableHeader>
                        <TableRow>
                            <TableHead className="hidden md:table-cell">
                                ID
                            </TableHead>
                            <TableHead>Nombre</TableHead>
                            <TableHead
                                className="hidden sm:table-cell">
                                Email
                            </TableHead>
                            <TableHead
                                className="hidden lg:table-cell">
                                Roles
                            </TableHead>
                            <TableHead>Estado</TableHead>
                            <TableHead
                                className="text-right">
                                Acciones
                            </TableHead>
                        </TableRow>
                    </TableHeader>

                    {/* TABLE BODY */}
                    <TableBody>
                        {users?.map((user) => (
                            <TableRow key={user.id}>
                                {/* ID */}
                                <TableCell className="hidden md:table-cell">
                                    {user.id}
                                </TableCell>

                                {/* NOMBRE */}
                                <TableCell className="font-medium">
                                    {user.fullName}
                                </TableCell>

                                {/* EMAIL */}
                                <TableCell className="hidden sm:table-cell">
                                    {user.email}
                                </TableCell>

                                {/* ROLES */}
                                <TableCell className="hidden lg:table-cell">
                                    {user.roles?.length ? (
                                        <div className="flex gap-2 flex-wrap">
                                            {user.roles.map((role) => (
                                                <span
                                                    key={`${user.id}-${role}`}
                                                    className="px-2 py-1 text-xs rounded bg-gray-100 border"
                                                >
                                                    {role}
                                                </span>
                                            ))}
                                        </div>
                                    ) : (
                                        <span className="text-xs text-gray-400">
                                            Sin roles
                                        </span>
                                    )}
                                </TableCell>

                                {/* ESTADO */}
                                <TableCell>
                                    <span
                                        className={`px-2 py-1 rounded text-xs font-medium ${user.isActive
                                            ? "bg-green-100 text-green-700"
                                            : "bg-red-100 text-red-700"
                                            }`}
                                    >
                                        {user.isActive
                                            ? "Activo"
                                            : "Inactivo"}
                                    </span>
                                </TableCell>

                                {/* ACCIONES */}
                                <TableCell className="text-right">
                                    <div className="flex flex-col sm:flex-row sm:justify-end gap-2">
                                        <Link
                                            to={`/admin/users/${user.id}/edit`}
                                            className="text-blue-600 hover:underline text-sm"
                                        >
                                            Editar
                                        </Link>

                                        <button
                                            className="text-red-600 hover:underline text-sm"
                                            onClick={() => {
                                                const confirmDelete = confirm(
                                                    `¿Estás seguro de eliminar el producto "${user.fullName}"?`
                                                )

                                                if (confirmDelete) {
                                                    deleteUser.mutate(user.id)
                                                }
                                            }}
                                        // className="text-red-600 hover:underline"
                                        >
                                            Eliminar
                                        </button>
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </>
    );
};
