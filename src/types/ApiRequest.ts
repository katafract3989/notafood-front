import {RestaurantApiResponse} from "@/types/Restaurant";

export type ApiResponse = {
    data: RestaurantApiResponse
}

export type ApiRequestOptions = {
    params?: ApiRequestParams
    data?: FormData
}

export type ApiRequestParams = Record<string, string | number | null>

export type ApiRequestBody = Record<string, ApiRequestParams | ApiRequestParams[]>

export type ApiError = {
    message: string,
    code: number,
}
