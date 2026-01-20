import { AdminTitle } from "@/admin/components/AdminTitle"
import { UserForm } from "@/admin/components/UserForm"
import { useCreateUser } from "@/auth/hooks/useCreateUser"

export const AdminUserCreatePage = () => {
    const createUser = useCreateUser()

    return (
        <>
            <AdminTitle
                title="Nuevo usuario"
                subtitle="Crea un nuevo usuario"
            />

            <UserForm
                onSubmit={(data) => createUser.mutate(data)}
            />
        </>
    )
}
