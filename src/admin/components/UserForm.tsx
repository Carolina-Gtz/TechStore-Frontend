import type { Roles } from "@/auth/interfaces/users.response";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { useForm } from "react-hook-form";

export interface UserFormData {
    fullName?: string;
    email: string;
    password?: string;
    role?: Roles;
}

interface Props {
    defaultValues?: UserFormData;
    onSubmit: (data: UserFormData) => void;
    error?: string | null;

}

export const UserForm = ({ defaultValues, onSubmit, error }: Props) => {
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm<UserFormData>({
        defaultValues,
    });


    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-white p-6 rounded shadow max-w-xl w-full space-y-4"
        >

            {/* ERROR BACKEND */}
            {error && (
                <p className="text-sm text-red-600 text-center">
                    {error}
                </p>
            )}

            {/* NOMBRE */}
            <div>
                <Input
                    placeholder="Nombre completo"
                    {...register("fullName", {
                        required: "El email es obligatorio",
                    })}
                />
                {errors.fullName && (
                    <p className="text-sm text-red-500">
                        {errors.fullName.message}
                    </p>
                )}
            </div>

            {/* EMAIL */}
            <div>
                <Input
                    type="email"
                    placeholder="Correo electrónico"
                    {...register("email", {
                        required: "El email es obligatorio",
                    })}
                />
                {errors.email && (
                    <p className="text-sm text-red-500">
                        {errors.email.message}
                    </p>
                )}
            </div>

            {/* PASSWORD */}
            <div>
                <Input
                    type="password"
                    placeholder={
                        defaultValues
                            ? "Nueva contraseña (opcional)"
                            : "Contraseña"
                    }
                    {...register("password", {
                        required: defaultValues
                            ? false
                            : "La contraseña es obligatoria",
                        minLength: {
                            value: 6,
                            message: "Mínimo 6 caracteres",
                        },
                        maxLength: {
                            value: 25,
                            message: "Máximo 25 caracteres",
                        },
                        pattern: {
                            value:
                                /(?:(?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
                            message:
                                "Debe incluir mayúscula, minúscula y un número",
                        },
                    })}
                />
                {errors.password && (
                    <p className="text-sm text-red-500">
                        {errors.password.message}
                    </p>
                )}
            </div>

            {/* ROLE */}
            <div>
                <Select
                    defaultValue={defaultValues?.role}
                    onValueChange={(value) =>
                        setValue("role", value as Roles)
                    }
                >
                    <SelectTrigger>
                        <SelectValue placeholder="Selecciona un rol" />
                    </SelectTrigger>

                    <SelectContent>
                        <SelectItem value="admin">Administrador</SelectItem>
                        <SelectItem value="customer">Cliente</SelectItem>
                    </SelectContent>
                </Select>

                {errors.role && (
                    <p className="text-sm text-red-500">
                        {errors.role.message}
                    </p>
                )}
            </div>

            {/* BOTÓN */}
            <Button type="submit" className="w-full sm:w-auto">
                {defaultValues ? "Actualizar usuario" : "Crear usuario"}
            </Button>
        </form>
    );
}