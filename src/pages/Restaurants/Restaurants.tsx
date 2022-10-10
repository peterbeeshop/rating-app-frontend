import {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import styles from './Restaurants.module.css'
import {RestaurantType} from '../../types/restaurants'
import {getAllRestaurants} from '../../services/restaurants'

const Restaurants = () => {
    const [restaurants, setRestaurants] = useState<RestaurantType[]>()

    useEffect(() => {
        const fetchRestaurants = async() => {
            const response = await getAllRestaurants()
            setRestaurants(response);
        }

        fetchRestaurants()
    }, [])

    return (
        <div className={styles.container}>
            {
                restaurants?.map( restaurant => {
                    const {id, attributes} = restaurant
                    return (
                        <div key={id} className={styles.innerContainer}>
                            <h2 className={styles.name}>{attributes.name}</h2>
                            <h5 className={styles.location}>Location: {attributes.location}</h5>
                            <Link className={styles.linkTag} to={`/restaurant/${id}`}>See more</Link>
                        </div>
                    )
                })
            }
        </div>
    )
   
}

export default Restaurants