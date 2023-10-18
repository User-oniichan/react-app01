import logo from './logo.svg';
//import './App.css';
import { C01componente } from './components/C01componente';
import Contador1 from './components/C02componente';
import Contador2 from './components/C03componente';
import Contador3 from './components/C04componente';
import C05operador from './components/C05operadorTemario';
import C06matriz from './components/C06matriz1';
import { AppForm } from './components/AppForm';

function App() {
  return (
    <div style={{display:"grid", placeItems:"center", width:"", background:"white", padding:"20px"}}>
      
      <AppForm />
      <p>Nº 1 Juan Manuel            x    A</p>
      <p>Nº 2 Maria Valencia            x    A</p>
    </div>
  );
}



export default App;
