import { apiClient } from './config';
import {RestaurantType} from '../types/restaurants'


export const getAllRestaurants = async (): Promise<RestaurantType[]> => {
    return (await apiClient.get('/restaurants?populate=ratings')).data.data;
}
