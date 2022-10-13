import { DivList, LiStyled } from "./style";
import { FaRegTrashAlt } from "react-icons/fa";
import { useContext, useState } from "react";
import { ModalContext } from "../../../../Context/ModalContext/modal";
import { DataContext } from "../../../../Context/DataContext/context";
import { ModaEdite } from "../BaseModal/ModalEdite";
import { GrDocumentUpdate } from "react-icons/gr";

export const List = ({ tech }) => {
  const [ teste, setTeste] = useState("")

  const { openModalEdit, deleteTech} = useContext(ModalContext);
  const { deletAnimation } = useContext(DataContext);
  //  onClick={() => openModalEdit()} tentar atualizar
  // console.log(tech)
  console.log(teste)
  return (
    <LiStyled id={tech.id} className={deletAnimation}>
      <h4>{tech?.title} </h4>
      <span className="atualizar">
        <GrDocumentUpdate />
      </span>
        <button onClick={()=>setTeste(tech.id)}> teste</button>
      <DivList>
        <p>Nivel: {tech?.status}</p>
        <FaRegTrashAlt className="trash" onClick={() => deleteTech(tech.id)}/>
      </DivList>

      <ModaEdite tech={tech}/>
    </LiStyled>
  );
};
