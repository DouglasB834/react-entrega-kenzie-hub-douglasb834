
import * as yup from 'yup' 
export const loginSchema = yup.object().shape({
    email: yup.string().required("E-mail Obrigatório").email("Campo invalido"),
    password: yup.string().required("Senha obrigatório").min(8,"No minimo são 8 caracter")
})