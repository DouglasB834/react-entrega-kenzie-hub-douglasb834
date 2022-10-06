import { RoutesMain } from './Routes';
// import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import { DataContext} from './Context/context';
import { useState } from 'react';




function App() {
  const [user, setUser] = useState()
  console.log(user)
  return (
    <>
    <DataContext.Provider value={{user, setUser}}>
      <div className="containeGeral">
        <RoutesMain/>
      </div>
    </DataContext.Provider>
    
    </>
  );
}

export default App;
