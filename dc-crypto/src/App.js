import './App.css';
import { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';

import Header from './Components/Header/Header';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Data from './Components/Data/Data';
import Favorites from './Components/Favorites/Favorites';
import AllCrypto from './Components/AllCrypto/AllCrypto';
import IndividualCryptoPage from './Components/IndividualCryptoPage/IndividualCryptoPage';

import Footer from './Components/Footer/Footer';

function App() {
  const [currentUser, setCurrentUser] = useState();

  // Currently mocking a signed in user
  useEffect(() => {
    const userData = {
      name: "CRHarding",
      favorites: []
    }

    handleLogin(userData);
  }, []);

  const handleLogin = (userData) => {
    setCurrentUser(userData);
  }

  const addFavorite = (favorite) => {
    currentUser.favorites.push(favorite);
  }

  return (
    <div className="App">
      <Header />
      <Route path="/about" render={() =>
        <About />
      } />
      <Route path="/contact" render={() =>
        <Contact />
      } />
      <Route path="/data-viz" render={() =>
        <Data />
      } />
      <Route path="/favorites" render={() =>
        <Favorites user={currentUser} />
      } />
      <Route path="/all" render={() =>
        <AllCrypto
          addFavorite={addFavorite}
          user={currentUser}
        />
      } />
      {/**
        Future refactor: update to useParams hook provided by react-router
        instead of props.match.params.id
      */}
      <Route path="/crypto/:id" render={(props) =>
        <IndividualCryptoPage
          id={props.match.params.id}
          addFavorite={addFavorite}
          user={currentUser}
        />
      } />
      <Footer />
    </div>
  );
}

export default App;
