import jsonToFormData from 'json-form-data';
const instance = require('axios').default;


export default class Api {

    protected readonly  BASE_URL: string = 'http://localhost:8080'
    protected prefix: string = 'api'
    protected headers: Record<string, any> = {
        'Content-Type': 'multipart/form-data',
        'X-Requested-With': 'XMLHttpRequest',
        'Accept': 'application/json'
    }

    async axiosRequest(method: string, endpoint: string, options?: Record<string, any>) {
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
            this.errorsHandler()
        }
    }

    async getRequest(endpoint: string, params: Record<string, any> = {}): Promise<Record<string, any>> {
        return await this.axiosRequest('GET', endpoint, {
            params: {...params}
        })
    }

    async postRequest(endpoint: string, body: Record<string, any> = {}): Promise<Record<string, any>> {
        return await this.axiosRequest('POST', endpoint, {
           data: jsonToFormData(body, {includeNullValues: true})
        })
    }

    async deleteRequest(endpoint: string): Promise<Record<any, any>> {
        return await this.axiosRequest('DELETE', endpoint)
    }
    //TODO сделать обработчик ошибок
    private errorsHandler() {
        throw 'The server responded with an error'
    }

}



