import  logo from "../../assets/Logo.png"
import { DivChangePsw, FormStyled, InputStyled } from "../../components/Form/Style"
import { Link} from "react-router-dom"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import {useContext, useEffect, useState } from "react"
import { DivStyled } from "./style"
import { ImEye } from "react-icons/im";
import { GiEyelashes } from "react-icons/gi";
import { loginSchema } from "./loginValidador"
import { DataContext } from "../../Context/DataContext/context"
import { RequestContext } from "../../Context/ContexResquests"
export const Login =()=>{
    const {navigate} =useContext(DataContext)
    
    const { submitLogin} =useContext(RequestContext)

    const { register, handleSubmit, formState:{errors}} = useForm({
        resolver:  yupResolver(loginSchema)
    })
    
    const token = localStorage.getItem("@hub:token")
    const id = localStorage.getItem("@hub:id")
    useEffect(()=>{
        if(token){
            navigate(`/dashboard/user/${id}`)
        }
    },[])
    
 
    const [changePsw, setChangePsw] = useState(false) 

    return (
        <DivStyled >
            <div className="boxLogo">                  
                <img src={logo} alt="Logo" />
            </div>     
            <FormStyled className="animate__fadeInBottomLeft" onSubmit={(handleSubmit(submitLogin))}>
                <div className="boxtitle">
                    <h3 className="title">Login</h3>
                </div>                
                
                <label htmlFor="email">Email</label>
                <InputStyled id="email" type="email" placeholder="Digite e-mail"  {...register("email")}/>
                <span className="errors">
                    {errors.email?.message}
                </span>
                
                <label htmlFor="password">Senha</label>

                <DivChangePsw>
                <input className="changeInput" id="password" type={ changePsw === false ? "password": "text"} placeholder="Digite password"  {...register("password")}/>
                   <span >
                    {changePsw ?(
                        <ImEye onClick={()=> setChangePsw(false)}/>

                    ):(
                        <GiEyelashes onClick={()=> setChangePsw(true)}/> 
                    )
                    }
                    </span>

                </DivChangePsw>

                <span className="errors">
                    {errors.password?.message}
                </span>

             
                <button  type="submit" className="btnLogin">Entrar</button>

                <div className="boxSingUp">
                    <p>Ainda não possuir uma conta ?</p>
                    <Link to="singup" className="singUp">Cadastrar</Link>
                </div>

            </FormStyled>

        </DivStyled>

    )


}