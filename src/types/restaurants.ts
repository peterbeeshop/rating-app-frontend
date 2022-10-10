
export type RestaurantType = {
    id: number;
    attributes: {
        name: string;
        location?: string;
        ratings?: RatingsType;
    }
    
}

export type RatingsType = {
    data: 
        {
            id:number;
            attributes: {
                description: string;
                rating: RatingType
            }
        }[]

}

type RatingType = 1 | 2 | 3 | 4 | 5;
