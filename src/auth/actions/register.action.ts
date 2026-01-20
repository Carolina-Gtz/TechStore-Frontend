import { techStoreApi } from "@/api/techStoreApi";
import type { AuthResponse } from "../interfaces/auth.response";
import axios from "axios";

export const registerAction = async (
    fullName: string,
    email: string,
    password: string,
): Promise<AuthResponse> => {
    try {
        const { data } = await techStoreApi.post<AuthResponse>('/auth/register', {
            fullName,
            email,
            password
        });
        return data;

    } catch (error) {

        if (axios.isAxiosError(error)) {
            throw error;
        }

        throw new Error("Error inesperado");
    }

}