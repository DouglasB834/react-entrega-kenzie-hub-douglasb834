
import React, { useContext } from 'react'
import { DivAddStyled } from './style'
import { IoIosAddCircle } from "react-icons/io";
import { DataContext } from '../../../../Context/DataContext/context';

export const AddTec = () => {
  const {add } = useContext(DataContext);

  return (
    <DivAddStyled>
        <h4>Tecnologias</h4>
        <button type="submit" onClick={(add)}><IoIosAddCircle/></button>   
    </DivAddStyled>
  )
}
