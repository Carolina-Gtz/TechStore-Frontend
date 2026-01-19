import { techStoreApi } from "@/api/techStoreApi"
import type { Roles } from "../interfaces/users.response";

export interface UpdateUserPayload {
    id: string;
    fullName?: string;
    email?: string;
    password?: string;
    role?: Roles;
}

export const updateUserAction = async ({
    id,
    ...payload
}: UpdateUserPayload) => {

    const { data } = await techStoreApi.patch(`/auth/${id}`, payload)

    return data;

}
