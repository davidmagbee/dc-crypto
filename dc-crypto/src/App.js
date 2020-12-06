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
  const [currentUser, setCurrentUser] = useState(null);

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
        <AllCrypto />
      } />
      <Route path="/crypto/:id" render={(props) =>
        <IndividualCryptoPage id={props.match.params.id}/>
      } />
      <Footer />
    </div>
  );
}

export default App;
