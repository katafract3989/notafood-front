import jsonToFormData from 'json-form-data';
import {ApiRequestBody, ApiRequestOptions, ApiRequestParams, ApiResponse} from "@/types/ApiRequest";
const instance = require('axios').default;

export default  class Api {

    protected static BASE_URL: string = 'http://localhost:8080'
    protected static headers: Record<string, string> = {
        'Content-Type': 'multipart/form-data',
        'X-Requested-With': 'XMLHttpRequest',
        'Accept': 'application/json'
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
        } catch (error) {
            // Todo реализовать обработчик ошибок
            throw 'The server responded with an error'
        }
    }

    static async getRequest(endpoint: string, params?: ApiRequestParams): Promise<ApiResponse> {
        return await this.axiosRequest('GET', endpoint, {
            params: {...params}
        })
    }

    static async postRequest(endpoint: string, body: ApiRequestBody): Promise<ApiResponse> {
        return await this.axiosRequest('POST', endpoint, {
           data: jsonToFormData(body, {includeNullValues: true})
        })
    }

    static async deleteRequest(endpoint: string): Promise<ApiResponse> {
        return await this.axiosRequest('DELETE', endpoint)
    }
}



