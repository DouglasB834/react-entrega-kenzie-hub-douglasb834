import { createContext, useEffect } from "react";
import { instance } from "../Api/instance";

export const DataContext = createContext({}) 

export const Contexto =({setValues})=>{


    useEffect(()=>{        
        const token = localStorage.getItem("@token")
        instance.defaults.headers.authorization = `Bearer ${token}`
        instance.get(`/profile`)                
        .then(({data}) =>{
            setValues(data)
        })
        .catch(error => console.log(error))
      

    },[])


}

