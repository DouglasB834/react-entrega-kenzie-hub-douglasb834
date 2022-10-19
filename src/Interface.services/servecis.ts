import { Dispatch, SetStateAction } from "react";

export interface IPropsValue {
    user: IUser;
    setModal: Dispatch<SetStateAction<boolean>>;
    isModal: boolean;
    setLoading: Dispatch<SetStateAction<boolean>>;
    loading: boolean;
    setCloseAnimation:Dispatch<SetStateAction<string>>;
    closeAnimation:string;
    setDeletAnimation:Dispatch<SetStateAction<string>>;
    deletAnimation:string;
    tecList:ITechs[]
    // setTecList:


    
    onSubmitRegister?: (data: IUser) => void;
  }


  export interface IChildren {
    children: React.ReactNode;
  }
  
  export interface ITechs {
    id: string;
    title: string;
    status: string;
  }
  
  export interface IUser {
    id?: string;
    name?: string;
    email: string;
    password: string;
    confirmPassword?: string;
    bio?: string;
    contact?: string;
    course_module?: string;
    techs: ITechs[];
  }