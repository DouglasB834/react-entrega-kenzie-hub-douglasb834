import { RoutesMain } from './Routes';
// import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import { useState } from 'react';




function App() {
  const [values, setValues] = useState()
  return (
    <>
    
      <div className="containeGeral">
        <RoutesMain/>
      </div>
   
    
    </>
  );
}

export default App;
