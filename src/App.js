
import './App.css';
import Footer from './parts/Footer';

import Hero from './parts/Hero';
import Navbar from './parts/Navbar';
import News from './parts/News';
import Promo from './parts/Promo';
import Reviev from './parts/Reviev';
import Service from './parts/Service';
import Team from './parts/Team';
import Works from './parts/Works';

function App() {
  return (
   <>
   <Navbar />
   <Hero />
   <Promo/>
   <Service />
   <Works />
   <Team />
   <News />
   <Reviev />
   <Footer />
   </>
  );
}

export default App;
