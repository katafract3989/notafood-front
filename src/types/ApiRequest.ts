import {RestaurantApiResponse} from "@/types/Restaurant";

export type ApiResponse = {
    data: RestaurantApiResponse
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
