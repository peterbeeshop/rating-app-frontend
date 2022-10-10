import { Routes, Route } from "react-router-dom";
import Header from './components/Header/Header';
import styles from './App.module.css';
import Restaurants from './pages/Restaurants/Restaurants';
import DetailsPage from './pages/DetailsPage/DetailsPage';
import Footer from "./components/Footer/Footer";
import Homepage from "./pages/Homepage/Homepage";


function App() {
  return (
    <>
      <Header />
      <div className={styles.container}>
          <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/restaurants' element={<Restaurants />} />
            <Route path='/restaurant/:id' element={<DetailsPage />} />
          </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
