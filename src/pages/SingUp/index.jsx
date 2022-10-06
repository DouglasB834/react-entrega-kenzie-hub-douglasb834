import { toast } from "react-toastify";
import { useForm } from "react-hook-form"
import { DivStyled } from "../Login/style"
import { HeaderHome } from "../../components/Header/headerHome/indx"
import { FormStyled, InputStyled, SelectStyled } from "../../components/Form/Style"
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { instance } from "../../Api/instance";
import { useNavigate } from "react-router-dom";


const notify =()=>{
    toast.success("✅ Cadastro realizado com suceso", {
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
    toast.error('Algo deu errado!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        toastId: "customId"

        });
}

export const SingUp =()=>{

   const userSchema = yup.object().shape({
    name: yup.string().required("Nome obrigatório"),
    email: yup.string().email("E-mail invalido").required("password Obrigatório"),
    password: yup.string().required("password Obrigatório").min(8, "Minimo de 8 caracter")
    .matches(/[A-Z]/, "Deve conter ao menos 1 letra mauscula")
    .matches(/[a-z]/, "Deve conter ao menos 1 letra minuscula")
    .matches(/(\d)/, "Deve conter ao menos 1 número")
    .matches(/(\W)|_/, "Deve conter ao menos 1 caracater especial")
    .matches(/.{8,}/, "Deve conter no minimo 8 caracater"),
    confirmPassword: yup.string().required("password Obrigatório").oneOf([yup.ref("password")],"Senha não confere"),
    bio: yup.string().required("Compo Obrigatório"),
    contact: yup.string().required("Compo de contato Obrigatorio"),
    course_module: yup.string().required("Selecione um modulo de Curso")
   })

    const {register, handleSubmit, formState:{errors}} =useForm({
        resolver: yupResolver(userSchema)
    })


    const navigate = useNavigate()

    const onSubmit =(data)=> {
        console.log(data)
        instance.post(`/users`, data)
        .then(res=> {
            notify()
            setTimeout(()=>{
                navigate("/")
            },1000)
        })
        .catch(error=> {
            Negative()
            console.log(error)
        })
    }

    return (
        <DivStyled >
            <div className="boxtitle">
                <HeaderHome/>
            </div>

            <FormStyled className="animate__flipInX" onSubmit={(handleSubmit(onSubmit))}>

                <div className="boxtitle">
                    <h3 className="title">Cadastrar</h3>
                    <p>Rapido e grátis, vamos nessa</p>
                </div>

                <label htmlFor="name">Nome</label>
                <InputStyled type="text" id="name" placeholder="Digite aqui seu nome" {...register("name")}/>
                {errors.name?.message}
                <label htmlFor="email">Email</label>
                <InputStyled type="email" id="email"  placeholder="Digite aqui seu email" {...register("email")} />
                {errors.email?.message}

                <label htmlFor="password">Senha</label>
                <InputStyled type="password" id="password" placeholder="Digite aqui sua senha"{...register("password")}/>
                {errors.password?.message}

                <label htmlFor="confirmPassword">Confimar Senha</label>
                <InputStyled type="password" id="confirmPassword" placeholder="Confirme sua senha"  {...register("confirmPassword")}/>
                {errors.confirmPassword?.message}

                <label htmlFor="bio">Bio</label>
                <InputStyled type="text" id="bio"placeholder="Digite aqui sobre voce" {...register("bio")}/>
                {errors.bio?.message}

                <label htmlFor="contact">Contato</label>
                <InputStyled type="text" id="contact" placeholder="Opção de contato"{...register("contact")}/>
                {errors.contact?.message}
                
                <label htmlFor="course_module">Selecione módulo</label>
                <SelectStyled id="course_module" {...register("course_module")}>

                    <option value="Primeiro módulo (Introdução ao Frontend)">Primeiro módulo</option>
                    <option value="Segundo módulo (Frontend Avançado)">"Segundo módulo</option>
                    <option value="Terceiro módulo (Introdução ao Backend)">Terceiro módulo</option>
                    <option value="Quarto módulo (Backend Avançado)">Quarto módulo</option>
                    
                </SelectStyled>
                {/* {errors.course_module?.message} */}
               
                <button type="submit" className="btnSingForm">Cadastrar</button>

            </FormStyled>

        </DivStyled>
    )

}