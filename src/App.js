import './App.css';
import About from './components/js/About';
import Footer from './components/js/Footer';
import Header from './components/js/Header'
import Images from './components/js/Images';
import Komanda from './components/js/Komanda';
import Mesta from './components/js/Mesta';
import Usloviya from './components/js/Usloviya';
import Zapros from './components/js/Zapros';
import Map from './components/js/Map'
import Treki from './components/js/Treki';
import Contact from './components/js/Contact';

function App() {
  return (
    <div className="App">
      <Header/>
      <About/>
      <Mesta/>
      <Treki/>
      <Usloviya/>
      <Images/>
      <Map/>
      <Komanda/>
      <Zapros/>
      <Footer/>
      <Contact/>
    </div>
  );
}

export default App;
