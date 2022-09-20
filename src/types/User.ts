import {Restaurant} from "@/types/Restaurant";
export type UserApiResponse = User | User[]

export type User = {
    id: number,
    username: string,
    first_name: string,
    last_name: string,
    role: number,
    email: string,
    phone: string,
    restaurant?: Restaurant
}
