import  logo from "../../../assets/Logo.png"
import { Link, Outlet, useLocation} from "react-router-dom"
import { DivstyledHeader, HeaderStyled, HeaderStyledHome } from "./style"


export const HeaderHome = ()=>{

    const location = useLocation()
    console.log(location.pathname)

    const back =(event)=>{
        console.log("limpar")
        localStorage.removeItem("@token")
        localStorage.removeItem("@id")
    }
  


    return(
        <>
            {
                location.pathname ==="/singup" ?(
                    <HeaderStyledHome location={location.pathname}>
                    <div className="container">                
                        <div className="boxLogo">                  
                            <img src={logo} alt="Logo" />
                        </div>
    
                        <Link to="/" >voltar</Link>
                    </div>
                 </HeaderStyledHome>
                ):(
                    <DivstyledHeader >
                
                        <HeaderStyled>
                            <div className="container">
                                
                                <div className="boxLogo">                  
                                    <img src={logo} alt="Logo" />
                                </div>
            
                                <Link to="/" onClick={(back)}>voltar</Link>
                            </div>

                        </HeaderStyled>
            
                    </DivstyledHeader>
        

                )
            }
          


        
            <Outlet/>
        </>
    )
}
