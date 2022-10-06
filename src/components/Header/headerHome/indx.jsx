import  logo from "../../../assets/Logo.png"
import { Link, useLocation} from "react-router-dom"
import { HeaderStyledHome } from "./style"


export const HeaderHome = ()=>{

    const location = useLocation()
    console.log(location.pathname)

    const back =(event)=>{
        console.log("limpar")
        localStorage.removeItem("@token")
        localStorage.removeItem("@id")
    }


    return(

        <HeaderStyledHome location={location.pathname}>
            <div className="container">                
                <div className="boxLogo">                  
                    <img src={logo} alt="Logo" />
                </div>

                <Link to="/" onClick={(back)}>voltar</Link>
            </div>
        </HeaderStyledHome>
    )
}
