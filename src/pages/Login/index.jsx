
import { useNavigate } from "react-router-dom"
import { FormStyled, InputStyled } from "../../components/Form/Style"
import  logo from "../../img/Logo.png"
import { DivStyled } from "./style"

export const Login =()=>{
    
    const navitage = useNavigate()
    const btnSingUp =()=> navitage("/singup")

    //por enquanto 
    const logando=(user)=> navitage("dashboard/token")



    return (
        <DivStyled>
            <div className="boxLogo">                  
                <img src={logo} alt="Logo" />
            </div>            
            <FormStyled className="animate__fadeInBottomLeft">

                <div className="boxtitle">
                    <h3 className="title">Login</h3>
                </div>                
                <label htmlFor="email">Email</label>
                <InputStyled id="email" type="email" placeholder="Digite e-mail" required/>
                <label htmlFor="password">Senha</label>
                <InputStyled id="password" type="password" placeholder="Digite password" required/>
                
                {/* <ButtonStyled background="color-primary">chama logar</ButtonStyled> */}

                <button  className="btnLogin" onClick={(logando)} >Entrar</button>
                <div className="boxSingUp">
                    <p>Ainda não possuir uma conta ?</p>
                    <button  className="singUp" onClick={(btnSingUp)}>Cadastrar</button>
                </div>

            </FormStyled>

        </DivStyled>

    )


}