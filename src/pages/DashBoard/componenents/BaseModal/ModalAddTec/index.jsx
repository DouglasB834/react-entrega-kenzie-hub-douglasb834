import React, { useContext } from "react";
import { MdOutlineClose } from "react-icons/md";
import {  FormStyled, InputStyled, SelectStyled} from "../../../../../components/Form/Style";
import { DataContext } from "../../../../../Context/DataContext/context";
import { DivtitleModal } from "../style";

export const ModalAddtec = () => {
  const {setModal ,showModal} = useContext(DataContext);

  

  return (
    
    <div className="containerCadstrar animate__flipInY">
      <DivtitleModal>
        <p>Cadastrar Tecnologia</p>

        <span onClick={() => showModal()}>
          <MdOutlineClose />
        </span>
      </DivtitleModal>

      <FormStyled onSubmit={(event) => event.preventDefault()}>
        <label htmlFor="tech">nome</label>
        <InputStyled id="tech" placeholder="Digite a linguagem de programação" />
        
        <label htmlFor="level">Selecionar status</label>
        <SelectStyled id="level">
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
