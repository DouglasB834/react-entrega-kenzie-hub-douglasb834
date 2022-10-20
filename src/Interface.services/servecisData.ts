import { Dispatch, ReactNode, SetStateAction } from "react";
import { NavigateFunction } from "react-router-dom";

export interface IPropsValue {
    user: IUser,
    setUser:Dispatch<SetStateAction<IUser>>
    setModal: Dispatch<SetStateAction<boolean>>,
    isModal: boolean,

    loading: boolean;
    closeAnimation:string,
    deletAnimation:string,
    tecList:ITechs[],
    setTecList:Dispatch<SetStateAction<ITechs[]>>
    navigate:NavigateFunction,
    showModal?: ()=>void,
    add :()=>void,
    token:string | null

  }

  export interface IChildren {
    children: ReactNode;
  }
  
  export interface ITechs {
    id: string;
    title: string;
    status: string;
  }
  
  export interface IUser {
    id?: string;
    name: string;
    email: string;
    password: string;
    confirmPassword?: string;
    bio?: string;
    contact?: string;
    course_module?: string;
    techs: ITechs[];
  }

  export interface iErros{
    name :string;
    email :string;
    password :string;
    confirmPassword :string;
    bio :string;
    contact :string;
    course_module:string
  }