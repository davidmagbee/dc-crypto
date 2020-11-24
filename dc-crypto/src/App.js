import './App.css';
import { Route } from 'react-router-dom';

import Header from './Components/Header/Header';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Data from './Components/Data/Data';
import Favorites from './Components/Favorites/Favorites';
import AllCrypto from './Components/AllCrypto/AllCrypto';
import IndividualCrypto from './Components/IndividualCrypto/IndividualCrypto';
import Footer from './Components/Footer/Footer';

function App() {
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
        <Favorites />
      } />
      <Route path="/all" render={() =>
        <AllCrypto />
      } />
      <Footer />
    </div>
  );
}

export default App;
