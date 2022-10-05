
import  logo from "../../../img/Logo.png"
import { useNavigate } from "react-router-dom"
import { HeaderStyledHome } from "./style"


export const HeaderHome = ()=>{
    const navigate = useNavigate()
    const back =(event)=>navigate("/")


    return(
        <HeaderStyledHome>
            <div className="container">
                
                <div className="boxLogo">                  
                    <img src={logo} alt="Logo" />
                </div>

                <button onClick={(back)}>voltar</button>
            </div>

        </HeaderStyledHome>
    )
}