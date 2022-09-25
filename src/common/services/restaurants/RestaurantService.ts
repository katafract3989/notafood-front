import {Restaurant} from "@/types/Restaurant";
import BaseService from "../BaseService";

export default class RestaurantService extends BaseService{

    public async getRestaurants(): Promise<Restaurant[]> {
        const result = await this.api.getRequest('/restaurants')
        const restaurants: Restaurant[] = result.data as Restaurant[]
        return restaurants.filter((restaurant) => restaurant.isActive);
    }

    public async getRestaurant(id:number | string): Promise<Restaurant> {
        const result = await this.api.getRequest(`/restaurants/${id}`)
        return result.data as Restaurant
    }

}
