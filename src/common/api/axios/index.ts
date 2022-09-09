import jsonToFormData from 'json-form-data';
const instance = require('axios').default;

export default  class Api {

    static BASE_URL: string = 'http://localhost:8080'
    static headers: Record<string, string> = {
        'Content-Type': 'multipart/form-data',
        'X-Requested-With': 'XMLHttpRequest',
        'Accept': 'application/json'
    }

   static async axiosRequest(method: string, endpoint: string, options?: Record<string, any>): Promise<Record<string, any>> {
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
            throw 'The server responded with an error'
        }
    }

    static async getRequest(endpoint: string, params: Record<string, any> = {}): Promise<Record<string, any>> {
        return await this.axiosRequest('GET', endpoint, {
            params: {...params}
        })
    }

    static async postRequest(endpoint: string, body: Record<string, any> = {}): Promise<Record<string, any>> {
        return await this.axiosRequest('POST', endpoint, {
           data: jsonToFormData(body, {includeNullValues: true})
        })
    }

    static async deleteRequest(endpoint: string): Promise<Record<any, any>> {
        return await this.axiosRequest('DELETE', endpoint)
    }



}



