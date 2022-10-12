import { DivList, LiStyled } from "./style";
import { FaRegTrashAlt } from "react-icons/fa";
import { useContext } from "react";
import { ModalContext } from "../../../../Context/ModalContext/modal";
import { DataContext } from "../../../../Context/DataContext/context";
import { ModaEdite } from "../BaseModal/ModalEdite";

export const List = ({ tech }) => {
  const {openModalEdit } = useContext(ModalContext);
  const { deleteTech ,deletAnimation } = useContext(DataContext);
//  onClick={() => openModalEdit()}
  return (
    <LiStyled className={deletAnimation}  >
      <h4>{tech?.title} </h4>
      <DivList>
        <p>Nivel: {tech?.status}</p>
        <FaRegTrashAlt className="trash" onClick={()=>deleteTech(tech.id)} />
      </DivList>
      <ModaEdite tech={tech.id}/>
    </LiStyled>
  );
};
