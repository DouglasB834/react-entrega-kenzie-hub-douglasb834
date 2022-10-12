import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import  * as yup from "yup"
import { MdOutlineClose } from "react-icons/md";
import {  FormStyled, InputStyled, SelectStyled} from "../../../../../components/Form/Style";
import { DataContext } from "../../../../../Context/DataContext/context";
import { DivtitleModal } from "../style";
import { yupResolver } from "@hookform/resolvers/yup";
import { ModalContext } from "../../../../../Context/ModalContext/modal";

export const ModalAddtec = () => {
  const {closeAnimation ,showModal, } = useContext(DataContext);
  const { addListTecnologias}= useContext(ModalContext)

  const schema = yup.object().shape({
    title: yup.string().required(),
    status: yup.string().required()

  })

  const {register, handleSubmit} = useForm({
    resolver: yupResolver(schema)
  })

  const submit= (data)=>{
    addListTecnologias(data)
     
  }

  return (    
    
    <div className={closeAnimation}>
      <DivtitleModal>
        <p>Cadastrar Tecnologia</p>
        <span onClick={() => showModal()}>
          <MdOutlineClose />
        </span>
      </DivtitleModal>

      <FormStyled onSubmit={(handleSubmit(submit))}>
        <label htmlFor="title">nome</label>
        <InputStyled id="title" placeholder="Digite a linguagem de programação" {...register("title")} />
        
        <label htmlFor="status">Selecionar status</label>
        <SelectStyled id="status" {...register("status")}>
          <option >Selecione o nivel</option>
          <option value="Iniciante">Iniciante</option>
          <option value="Intermediário">Intermediário</option>
          <option value="Avançado">Avançado</option>  

        </SelectStyled>
        <button type="submit" className="btnLogin">
          Cadastrar Tecnologia
        </button>
      </FormStyled>
    </div>
  );
};
