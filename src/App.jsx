import { RoutesMain } from "./Routes";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import { DataProvider } from "./Context/DataContext/context";
import { RequestProvide } from "./Context/ContexResquests";
import { ModalProvide } from "./Context/ModalContext/modal";

const App = () => {
 
  return (
    <DataProvider>
      <RequestProvide>
      <ModalProvide>
        <div className="containeGeral">
          <RoutesMain />
        </div>
      </ModalProvide>
      </RequestProvide>
    </DataProvider>
  );
};

export default App;
