
import * as yup from "yup"

export const UserSchema =  yup.object().shape({
       name: yup.string().required("Nome obrigatório"),
       email: yup.string().email("E-mail invalido").required("E-mail Obrigatório"),
       password: yup.string().required("Senha Obrigatório")
       .matches(/[A-Z]/, "Deve conter ao menos 1 letra maiuscula ")
       .matches(/[a-z]/, "Deve conter ao menos 1 letra minúscula ")
       .matches(/(\d)/, "Deve conter ao menos 1 número")
       .matches(/(\W)|_/, "Deve conter ao menos 1 caracater especial")
       .matches(/.{8,}/, "Deve conter no minimo 8 caracater"),
       confirmPassword: yup.string().required("Senha obrigatório").oneOf([yup.ref("password")],"Senha não confere"),
       bio: yup.string().required("Campo Obrigatório"),
       contact: yup.string().required("Campo de contato obrigatorio"),
       course_module: yup.string().required("Selecione um modulo de Curso")
})


