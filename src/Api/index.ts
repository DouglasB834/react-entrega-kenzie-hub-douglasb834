import { toast } from "react-toastify";



export const SucessRegister =()=>{
    toast.success("✅ Cadastro realizado com suceso", {
        position: "top-right",
        autoClose: 600,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        toastId: "customId"
        });
}

export const NegativeRergister= (text:string)=>{
    toast.error(text, {
        position: "top-right",
        autoClose: 600,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        toastId: "customId"

        });
}

export const SucessLogin =(text:string)=>{
    toast.success(text, {
        position: "top-right",
        autoClose: 400,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        toastId: "customId"
        });
    }
    
export  const NegativeLogin= ()=>{
    toast.error("email ou Senha Invalido", {
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