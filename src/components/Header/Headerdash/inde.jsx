import { Outlet, useNavigate } from "react-router-dom"
import  logo from "../../../img/Logo.png"
import { DivstyledHeader, HeaderStyled } from "./style"



export const HeaderGeral = ()=>{
    const navigate = useNavigate()
    const back =(event)=>navigate("/")
    return (
        <>
        <DivstyledHeader >
            
            <HeaderStyled>
                <div className="container">
                    
                    <div className="boxLogo">                  
                        <img src={logo} alt="Logo" />
                    </div>

                    <button onClick={(back)}>voltar</button>
                </div>
            </HeaderStyled>

        </DivstyledHeader>


        <Outlet/>
        </>



    )
}