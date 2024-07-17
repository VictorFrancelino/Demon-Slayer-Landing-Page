import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import theme from './theme';
import NavbarDemonSlayer from './components/navbar/navbar';
import Banner from './components/banner/banner';
import PersonagensCarousel from './components/personagensCarousel/personagensCarousel';
import Onis from './components/onis/onis';
import Pilares from './components/pilares/pilares';
import Kizukis from './components/kizukis/kizukis';

const setCSSVariables = (theme) => {
  Object.keys(theme).forEach(key => {
    document.documentElement.style.setProperty(`--${key}`, theme[key]);
  });
};
setCSSVariables(theme);

function App() {
  return (
    <div className="App">
      <NavbarDemonSlayer />
      <Banner />
      <PersonagensCarousel />
      <Onis />
      <Pilares />
    </div>
  );
}

export default App;
