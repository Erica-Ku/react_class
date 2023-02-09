//import Gal from './06/Gal';
//import Mycom from './07/Mycom';
//import MyForm from './08/MyForm';
//import Gal1 from './06_1/Gal1';
//import GalSelect from './06_1/GalSelect';
import RouterMain from './09/RouterMain';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
//import Taccident from './05/Taccident';


const App = () => {
  return (   
      <BrowserRouter>
        <RouterMain />
      </BrowserRouter>
  );
}

export default App;