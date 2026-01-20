import { AdminTitle } from "@/admin/components/AdminTitle";
import { UserForm, type UserFormData } from "@/admin/components/UserForm";
import { useParams } from "react-router";
import { useUpdateUser } from "@/auth/hooks/useUpdateUser";
import { useUser } from "@/auth/hooks/use-User";
import type { Roles } from "@/auth/interfaces/users.response";

export const AdminUserUpdatePage = () => {
    const { id } = useParams<{ id: string }>();

    const { data: user, isLoading } = useUser();
    const updateUser = useUpdateUser();

    if (isLoading) {
        return <p>Cargando usuario...</p>;
    }

    if (!user) {
        return <p>Usuario no encontrado</p>;
    }

    return (
        <>
            <AdminTitle
                title="Editar usuario"
                subtitle="Actualiza la información del usuario"
            />

            <UserForm
                defaultValues={{
                    fullName: user.fullName,
                    email: user.email,
                    role: user.roles?.[0] as Roles,
                }}
                onSubmit={(data: UserFormData) => {

                    updateUser.mutate({
                        id: id!,
                        ...data,
                    });
                }}
            />
        </>
    );
};
