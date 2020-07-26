import React from 'react';
import Header from './Header/header';
import Slyder from './Slyder/slyder';
import Compane from './Compane/Compane.js';
import News from './News/News';
import Subscription from './Subscription/Subscription';
import Footer from './Footer/Footer';


import './App.css';

function App() {
   
  
  return (
    <div className="App">
      <Header />
      <Slyder />
      <Compane />
      <News />
      <Subscription />
      <Footer />
      
    </div>
  );
}

export default App;
