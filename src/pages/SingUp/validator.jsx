
import * as yup from "yup"

export const UserSchema =  yup.object().shape({
       name: yup.string().required("Nome obrigatório"),
       email: yup.string().email("E-mail invalido").required("E-mail Obrigatório"),
       password: yup.string().required("Senha Obrigatório").min(8, "Minimo de 8 caracter")
       .matches(/[A-Z]/, "Deve conter ao menos 1 letra maiuscula ")
       .matches(/[a-z]/, "Deve conter ao menos 1 letra minúscula ")
       .matches(/(\d)/, "Deve conter ao menos 1 número")
       .matches(/(\W)|_/, "Deve conter ao menos 1 caracater especial"),
       confirmPassword: yup.string().required("password Obrigatório").oneOf([yup.ref("password")],"Senha não confere"),
       bio: yup.string().required("Compo Obrigatório"),
       contact: yup.string().required("Compo de contato Obrigatorio"),
       course_module: yup.string().required("Selecione um modulo de Curso")
})


