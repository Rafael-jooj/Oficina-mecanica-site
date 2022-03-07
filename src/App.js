import './App.css';
import Header from './components/header';
import Carrossel from './components/carrossel';
import Services from './components/services';
import Horarios from './components/horarios';
import Sobre from './components/sobre';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Carrossel/>
      <Services/>
      <Sobre/>
      <Horarios/>
      <Footer/>
    </div>
  );
}

export default App;
