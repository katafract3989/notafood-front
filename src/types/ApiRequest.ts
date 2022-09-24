import {RestaurantApiResponse} from "@/types/Restaurant";
import {UserApiResponse} from "@/types/User";

export type ApiResponse = {
    data: RestaurantApiResponse | UserApiResponse
    access_token?: string,
}

export type ApiRequestOptions = {
    params?: ApiRequestParams
    data?: any
}

export type ApiRequestParams = Record<string, string | number | null>

export type ApiRequestBody = Record<string, string | number | null | ApiRequestParams | ApiRequestParams[]>

export type ApiError = {
    message: string,
    code: number,
}
