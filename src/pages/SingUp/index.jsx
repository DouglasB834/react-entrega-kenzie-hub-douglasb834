
import { useForm } from "react-hook-form"
import { DivStyled } from "../Login/style"
import { HeaderHome } from "../../components/Header/headerHome/indx"
import { FormStyled, InputStyled, SelectStyled } from "../../components/Form/Style"
import * as yup from "yup"
import {yupResolver} from "@hookform/resolvers/yup"


export const SingUp =()=>{

    const userSchama = yup.object().shape({
        username: yup.string().required("email obrigatório"),
        password: yup.string().required("senha Obrigatorio").min(4)
    })
    

    const {register, handleSubmit} =useForm({
        resolver:yupResolver(userSchama)
    }) 

    const onSumit =(data)=> {
        console.log("oi")
        console.log(data)
    }
   

    return (
        <DivStyled >

            <div className="boxtitle">
                <HeaderHome/>
            </div>

            <FormStyled className="animate__flipInX" onSubmit={(handleSubmit(onSumit))}>

                <div className="boxtitle">
                        <h3 className="title">Cadastrar</h3>
                        <p>Rapido e grátis, vamos nessa</p>
                </div>

                <label htmlFor="name">Nome</label>
                <InputStyled type="text" id="name" placeholder="Digite aqui seu nome" required {...register("name")}/>

                <label htmlFor="email">Email</label>
                <InputStyled type="email" id="email"  placeholder="Digite aqui seu email" required {...register("email")} />

                <label htmlFor="password">Senha</label>
                <InputStyled type="password" id="password" placeholder="Digite aqui sua senha" required {...register("password")}/>

                <label htmlFor="confirmPassword">Confimar Senha</label>
                <InputStyled type="password" id="confirmPassword" placeholder="Confirme sua senha" required {...register("confirmPassword")}/>

                <label htmlFor="bio">Bio</label>
                <InputStyled type="text" id="bio"placeholder="Digite aqui sobre voce" required {...register("bio")}/>

                <label htmlFor="contact">Contato</label>
                <InputStyled type="text" id="contact" placeholder="Opção de contato"required {...register("contact")}/>
                
                <label htmlFor="course_module">Selecione módulo</label>
                <SelectStyled id="course_module" {...register("course_module")}>
                    <option value="Primeiro módulo (Introdução ao Frontend)">Primeiro módulo</option>
                    <option value="Segundo módulo (Frontend Avançado)">"Segundo módulo</option>
                    <option value="Terceiro módulo (Introdução ao Backend)">Terceiro módulo</option>
                    <option value="Quarto módulo (Backend Avançado)">Quarto módulo</option>
                </SelectStyled>
               
                <button type="submit" className="btnSingForm">Cadastrar</button>

            </FormStyled>

        </DivStyled>
    )

}