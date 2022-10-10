import { apiClient } from './config';
import {RestaurantType} from '../types/restaurants'


export const getAllRestaurants = async (): Promise<RestaurantType[]> => {
    return (await apiClient.get('/restaurants')).data.data;
}

export const getRestaurantById = async (id:string): Promise<RestaurantType> => {
    return (await apiClient.get(`/restaurants/${id}?populate=*`)).data.data;
}