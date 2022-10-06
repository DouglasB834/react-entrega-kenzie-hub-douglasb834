
import  logo from "../../assets/Logo.png"
import { instance } from "../../Api/instance"
import { FormStyled, InputStyled } from "../../components/Form/Style"
import { useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from 'yup' 
import { toast } from "react-toastify"
import { useContext } from "react"
import { DataContext } from "../../Context/context"
import { DivStyled } from "./style"

export const Login =()=>{
    const{setUser}=  useContext(DataContext)

    const notify =()=>{
    toast.success("✅Logando", {
        position: "top-right",
        autoClose: 800,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        toastId: "customId"
        });
    }
    const Negative= ()=>{
    toast.error('E-mail ou Login invalido', {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        toastId: "customId"

        });
    }

    const navitage = useNavigate()
    const btnSingUp =()=> navitage("/singup")  

    const loginSchema = yup.object().shape({
        email: yup.string().required("E-mail Obrigatório").email("Campo invalido"),
        password: yup.string().required("Password Obrigatório")
    })

    const { register, handleSubmit, formState:{errors}} = useForm({
        resolver:  yupResolver(loginSchema)
    })
  
    const submitLogin =(data)=>{
        // const 
        instance.post(`/sessions/`, data)
        .then(res=>{
        localStorage.setItem("@tokenHub",res.data.token)
        notify()
        setUser(res.data)
            setTimeout(()=>{
                navitage("dashboard")
            },1000)
        })
        .catch(error =>{
            Negative()
            console.log(error)
        })

       
    }
    

    return (
        <DivStyled>
            <div className="boxLogo">                  
                <img src={logo} alt="Logo" />
            </div>     

            <FormStyled className="animate__fadeInBottomLeft" onSubmit={(handleSubmit(submitLogin))}>

                <div className="boxtitle">
                    <h3 className="title">Login</h3>
                </div>                
                
                <label htmlFor="email">Email</label>
                <InputStyled id="email" type="email" placeholder="Digite e-mail"  {...register("email")}/>
                <span>{errors.email?.message}</span>
                <label htmlFor="password">Senha</label>
                <InputStyled id="password" type="password" placeholder="Digite password"  {...register("password")}/>
                <span>{errors.password?.message}</span>
             
                <button  className="btnLogin">Entrar</button>

                <div className="boxSingUp">
                    <p>Ainda não possuir uma conta ?</p>
                    <button  className="singUp" onClick={(btnSingUp)}>Cadastrar</button>
                </div>

            </FormStyled>

        </DivStyled>

    )


}