import { useNavigate } from 'react-router-dom';
import bgImage from '../../components/assets/welcome.png';
import styles from './Homepage.module.css'


function Homepage() {

    const navigate = useNavigate();

  return (
    <div className={styles.container}>
        <div className={styles.contentContainer}>
            <h1 className={styles.heading}>The Key To Fine Dining</h1>
            <p>We only show you the best restaurants in town so that you can chase that flavour</p>
            <button onClick={() => navigate("/restaurants")}>Explore Restaurants</button>
        </div>
        <div className={styles.imageContainer}>
            <img src={bgImage} alt="bgImage" />
        </div>
    </div>
  )
}

export default Homepage