import { Route, Routes } from "react-router-dom";
import { HeaderHome } from "../components/Header/headerHome/indx";
import { DashBoard } from "../pages/DashBoard/DashBoard";
import { Login } from "../pages/Login";
import { NotFound } from "../pages/NotFound";
import { SingUp } from "../pages/SingUp";

export const RoutesMain = () => (
  <Routes>
    <Route  index element={<Login />} />
    <Route path="/" element={<HeaderHome />}>
      <Route path="/singup" element={<SingUp />} />

        <Route path="/dashboard" element={<DashBoard />}>
          <Route path="/dashboard/user/:id" element={<DashBoard />} />
        </Route>               
    </Route>

    <Route path="*" element={<NotFound />} />
  </Routes>
);
