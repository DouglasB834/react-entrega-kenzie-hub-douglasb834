import logo from "../../../assets/Logo.png";
import { Link, Outlet, useLocation } from "react-router-dom";
import { DivstyledHeader, HeaderStyled, HeaderStyledHome } from "./style";

// interface iPropsHeader{
//   locations:string
//   onClick: ()=>void
// }


export const HeaderHome = () => {
  
  const location = useLocation();

  const back = () => {
    localStorage.removeItem("@hub:token");
    localStorage.removeItem("@hub:id");
  };

  return (
    <>
      {location.pathname === "/singup" ? (
        <HeaderStyledHome >
          <div className="container">
            <div className="boxLogo">
              <img src={logo} alt="Logo" />
            </div>

            <Link to="/">voltar</Link>
          </div>
        </HeaderStyledHome>
      ) : (
        <DivstyledHeader>
          <HeaderStyled>
            <div className="container">
              <div className="boxLogo">
                <img src={logo} alt="Logo" />
              </div>

              <Link to="/" onClick={back}>
                Sair
              </Link>
            </div>
          </HeaderStyled>
        </DivstyledHeader>
      )}

      <Outlet />
    </>
  );
};
