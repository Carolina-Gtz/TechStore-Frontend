export interface UsersResponse {
    id: string;
    email: string;
    fullName: string;
    isActive: boolean;
    roles: Roles[];
}
export type Roles = "admin" | "user";