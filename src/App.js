import './App.css';

import Header from './components/Header';
import "bootstrap/dist/css/bootstrap.min.css";
import Home from './components/Home';
import Services from './components/Services';
import Features from './components/Features';
import About from './components/About';
import Pricing from './components/Pricing';
import People from './components/People';
import Review from './components/Review';
import Blogs from './components/Blogs';
import Contact from './components/Contact';
import Social from './components/Social';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Home></Home>
      <Services></Services>
      <Features></Features>
      <About></About>
      <Pricing></Pricing>
      <People></People>
      <Review></Review>
      <Blogs></Blogs>
      <Contact></Contact>
      <Social></Social>
    </div>
  );
}

export default App;
