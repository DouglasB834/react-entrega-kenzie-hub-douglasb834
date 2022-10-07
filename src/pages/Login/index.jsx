import  logo from "../../assets/Logo.png"
import { instance } from "../../Api/instance"
import { DivChangePsw, FormStyled, InputStyled } from "../../components/Form/Style"
import { Link, useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from 'yup' 
import { toast } from "react-toastify"
import {useEffect, useState } from "react"
import { DivStyled } from "./style"
import { ImEye } from "react-icons/im";
// import { IconName } from "react-icons/gi";
export const Login =()=>{

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

    const locoPassword =()=>{
        // GiEyelashes , ImEye
    }



    const navigate = useNavigate()

    const loginSchema = yup.object().shape({
        email: yup.string().required("E-mail Obrigatório").email("Campo invalido"),
        password: yup.string().required("Password Obrigatório").min(8,"No minimo são 8 caracter")
    })

    const { register, handleSubmit, formState:{errors}} = useForm({
        resolver:  yupResolver(loginSchema)
    })
  
    const token = localStorage.getItem("@token")
    useEffect(()=>{
        if(token){
            navigate("/dashboard")
        }
    },[token])

    // const [loading, setLoading]= useState(false)//aprendendo a fazer loanding
    const submitLogin =(data)=>{
      
        instance.post(`/sessions/`, data)
        .then(res=>{
            localStorage.setItem("@id", res.data.user.id)
            localStorage.setItem("@token",res.data.token)
        notify()
            setTimeout(()=>{
                navigate("/dashboard")
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
                <span className="errors">
                    {errors.email?.message}
                </span>
                
                <label htmlFor="password">Senha</label>

                <DivChangePsw>
                <input className="changeInput" id="password" type="password" placeholder="Digite password"  {...register("password")}/>
                   <span>
                   <ImEye/>
                    </span>

                </DivChangePsw>

                <span className="errors">
                    {errors.password?.message}
                </span>

             
                <button  className="btnLogin">Entrar</button>

                <div className="boxSingUp">
                    <p>Ainda não possuir uma conta ?</p>
                    <Link to="singup" className="singUp">Cadastrar</Link>
                </div>

            </FormStyled>

        </DivStyled>

    )


}