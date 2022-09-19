import {ApiRequestBody, ApiRequestOptions, ApiRequestParams, ApiResponse, ApiError} from "@/types/ApiRequest";
import {AxiosError, AxiosResponse} from "axios";
import {store} from "../../../store/store"
import {notificationActions} from "../../../store/notificationReducer";
import {mainActions} from "../../../store/mainReducer";
const instance = require('axios').default;

export default  class Api {

    protected static BASE_URL: string = 'http://localhost:8080'
    protected static headers: Record<string, string> = {
        'Content-Type': 'application/json; charset=utf-8',
        'X-Requested-With': 'XMLHttpRequest',
        'Accept': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('access_token')}`
    }

    static async axiosRequest(method: string, endpoint: string, options?: ApiRequestOptions): Promise<ApiResponse> {
        const config = {
            headers: this.headers,
            method: method,
            url: `${this.BASE_URL}${endpoint}`,
            responseType: 'stream',
            ...options
        }
        try {
            let response = await instance(config)
            return response.data
        } catch (e: unknown) {
            if (e instanceof AxiosError) {
              this.errorHandler(e)
            }
            throw 'The server responded with an error'

        }
    }

    static async getRequest(endpoint: string, params?: ApiRequestParams): Promise<ApiResponse> {
        return await this.axiosRequest('GET', endpoint, {
            params: params
        })
    }

    static async postRequest(endpoint: string, body: ApiRequestBody): Promise<ApiResponse> {
        return await this.axiosRequest('POST', endpoint, {
           data: body
        })
    }

    static async deleteRequest(endpoint: string): Promise<ApiResponse> {
        return await this.axiosRequest('DELETE', endpoint)
    }

    static errorHandler(e: AxiosError) {
        let response: AxiosResponse
        let message: String
        let statusCode: Number | null = null
        if(e.response) {
            response = e.response
            message = response.data.message
            statusCode = response.data.statusCode
            store.dispatch(notificationActions.pushNotification({
                title: 'Сервер ответил ошибкой',
                text: `Текст ошибки: ${message}, код ошибки: ${statusCode}`,
                isRead: false,
                isShow: true,
                lifeCircle: 8000,
            }))
        }
        if(statusCode === 401) {
            store.dispatch(mainActions.setAuth(false))
        }

    }
}



