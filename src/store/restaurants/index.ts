import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getAllRestaurants} from '../../services/restaurants';
import {RestaurantType} from '../../types/restaurants'
import {RootState} from '../index';


interface RestaurantState {
	restaurants: RestaurantType[];
	loading: boolean;
}

const initialState: RestaurantState = {
	restaurants: [],
	loading: false
};

export const getRestaurants = createAsyncThunk(
	//action type string
	'restaurants/getRestaurants',
	// callback function
	async (thunkAPI) => {
	  const response: RestaurantType[] = await getAllRestaurants();
	return response;
})


const slice = createSlice({
	name: 'restaurants',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getRestaurants.pending, (state) => {
			state.loading = true
		})
		builder.addCase(getRestaurants.fulfilled, (state,action) => {
			state.loading = false
			state.restaurants = action.payload
		})
	}
});


export const restaurantSelectors = {
	selectRestaurantList: (state: RootState) => state.restaurants.restaurants,
	selectRestauranttById: (state: RootState, id: number) => {
		const list = restaurantSelectors.selectRestaurantList(state);
		return list.find((restaurant) => restaurant.id === id);
	},
};

export default slice.reducer