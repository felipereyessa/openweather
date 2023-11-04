//==========Archivos exportados(Dependencias y demas)==========//
import './assets/css/App.css'; // Estilos
import Navbar from './components/Navbar';
import WeatherPanel from './components/WheatherPanel';
//==========Exportacion al a=index.html==========//
function App() {
  return (
    <div className="App">
      <Navbar />
      <WeatherPanel />
    </div>
  );
}

export default App;
