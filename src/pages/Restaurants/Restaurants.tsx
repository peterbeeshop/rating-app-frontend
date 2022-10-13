import {useEffect } from 'react'
import {Link} from 'react-router-dom'
import styles from './Restaurants.module.css'
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { useDispatch, useSelector } from 'react-redux'
import {AppDispatch, RootState} from '../../store'
import {getRestaurants} from '../../store/restaurants'

const Restaurants = () => {
    const dispatch = useDispatch<AppDispatch>()

    const { restaurants, loading } = useSelector((state: RootState) => state.restaurants)

    useEffect(() => {
      dispatch(getRestaurants())
    }, [dispatch])    

    if (loading) {
        return (
          <Box className={styles.loading}>
            <CircularProgress />
          </Box>
        );
    }

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