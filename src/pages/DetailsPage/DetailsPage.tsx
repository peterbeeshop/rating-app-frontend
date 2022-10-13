import React, {useEffect} from 'react'
import {useParams} from 'react-router-dom'
import styles from './DetailsPage.module.css'
import {useSelector, useDispatch} from 'react-redux'
import {AppDispatch, RootState} from '../../store';
import {getRestaurants, restaurantSelectors} from '../../store/restaurants';

function DetailsPage() {
  const dispatch = useDispatch<AppDispatch>()
  let { id } = useParams<{ id?: string }>();

    const restaurant = useSelector((state:RootState) =>
        restaurantSelectors.selectRestauranttById(state,Number.parseInt(id!) )
	  );

    //incase the page is refreshed while still on the details page
    useEffect(() => {
      dispatch(getRestaurants())
    }, [dispatch]) 

  return (
    <>
      <div className={styles.detailsContainer} >
       <div>
        <h2 className={styles.heading2}>Name</h2>
        <h3>{restaurant?.attributes.name}</h3>
       </div>
        <div className={styles.addressContainer}>
          <h2 className={styles.heading2}>Address</h2>
          <h3>{restaurant?.attributes.location}</h3>
        </div>
      </div>
      <h2 className={styles.heading2}>Ratings</h2>
      <div className={styles.ratingsContainer}>
          {
            restaurant?.attributes.ratings?.data.length === 0 ? (
              <h2>{restaurant?.attributes.name} has no ratings yet.</h2>
            ): (
              restaurant?.attributes.ratings?.data.map( rating => {
                const {id, attributes} = rating; 
                return (
                    <div key={id} className={styles.ratingCard}>
                      <div>
                        <h2>Rating</h2>
                        <h4 className={styles.headingh4}>{attributes.rating} / 5</h4>
                      </div>
                      <div>
                        <h2>Description</h2>
                        <h4 className={styles.headingh4}>{attributes.description}</h4>
                      </div>
                    </div>
                )
              })
            )
          }
      </div>
    </>
  )
}


export default DetailsPage