import { Route, Routes } from "react-router-dom";
import { HeaderGeral } from "../components/Header/Headerdash/inde";
import { DashBoard } from "../pages/DashBoard/DashBoard";
import { Login } from "../pages/Login";
import { SingUp } from "../pages/SingUp";




export const RoutesMain =()=>(

    <Routes>
        
        <Route index element={<Login/> } />
        <Route path="/singup" element={<SingUp/>} />

        <Route path="/"  element={<HeaderGeral/>}>
        <Route path="/dashboard" element={<DashBoard/>} />            
        </Route>
        
        <Route path="*" element={"pagina nao encontrda"}/>
     
      
    </Routes>
)