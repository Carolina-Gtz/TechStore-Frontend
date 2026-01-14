import { techStoreApi } from "@/api/techStoreApi"
import type { AuthResponse } from "../interfaces/auth.response";

export const loginAction = async (email: string, password: string): Promise<AuthResponse> => {
    try {
        const { data } = await techStoreApi.post<AuthResponse>('/auth/login', {
            email,
            password
        });

        console.log(data)
        console.log(email, password)

        return data;

    } catch (error) {
        console.log(error)
        throw error;
    }

}
