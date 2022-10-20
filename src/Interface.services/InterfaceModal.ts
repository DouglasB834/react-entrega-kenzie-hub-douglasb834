import { Dispatch, SetStateAction } from "react";
import { ITechs } from "./servecisData";

export interface IStataUpdade{
    id?: string,
    title?:string,
    status?:string,
}

export interface addTEch{
    title:string,
    status: string
}



export interface IModalProvid{
    showEditModal: boolean,
    setShowEditModal:Dispatch<SetStateAction<boolean>>,
    openModalEdit: ()=> void,
    closeModalEdit: ()=>void,
    animation: string,
    addListTecnologias: (data: ITechs) =>void,
    deleteTech: (id: string)=>void,
    getUpdate:IStataUpdade
    setTgetUpdate:Dispatch<SetStateAction<{}>>
    atualizar:(data:ITechs )=> void

}