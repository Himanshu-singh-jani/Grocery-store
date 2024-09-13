import AppBanner from './Components/AppBanner/AppBanner';
import Footer from './Components/Footer/Footer';
import Hero from './Components/Hero/Hero'
import Services from './Components/Service/Services'
import WhareToBuy from './Components/WhareToBuy/WhareToBuy';


function App() {
  return (
    <div className="overflow-x-hidden">
      <Hero/>
      <Services/>
      <WhareToBuy/>
      <AppBanner/>
      <Footer/>
    </div>
  );
}

export default App;
