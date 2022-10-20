import { instance } from "../Api/instance";
import { IUser } from "./servecisData";



export interface iRequestProvid{
    submitLogin:(data: IUser) =>void
    
    onSubmitRegister: (data: IUser) => void,
}

// export async function (){

// }

// export const onLoging = async (data:IUser) =>{
//     const response = await instance.post<IUser>(`/sessions/`, data);

//     return response
// }