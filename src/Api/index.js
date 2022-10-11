import { toast } from "react-toastify";

export const SucessRegister =()=>{
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

export const NegativeRergister= (text)=>{
    toast.error(text, {
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

export const SucessLogin =()=>{
    toast.success("✅Logando", {
        position: "top-right",
        autoClose: 700,
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