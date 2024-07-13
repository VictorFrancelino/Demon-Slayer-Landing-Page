import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavbarDemonSlayer from './components/navbar';
import Banner from './components/banner';
import PersonagensCarousel from './components/personagensCarousel';
import Onis from './components/onis';

function App() {
  return (
    <div className="App">
      <NavbarDemonSlayer />
      <Banner />
      <PersonagensCarousel />
      <Onis/>
      <header className="App-header"></header>
    </div>
  );
}

export default App;
