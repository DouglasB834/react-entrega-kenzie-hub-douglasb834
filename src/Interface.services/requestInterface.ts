
import { IUser } from "./servecisData";

export interface iRequestProvid{
    submitLogin:(data: IUser) =>void
    
    onSubmitRegister: (data: IUser) => void,
}

//ia fazer as request da API aqu porem tive problemas e fiz onde estava mesmo