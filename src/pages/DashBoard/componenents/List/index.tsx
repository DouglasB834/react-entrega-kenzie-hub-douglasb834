import { DivList, LiStyled } from "./style";
import { FaRegTrashAlt } from "react-icons/fa";
import { useContext} from "react";
import { ModalContext } from "../../../../Context/ModalContext/modal";
import { DataContext } from "../../../../Context/DataContext/context";
import { ModaEdite } from "../BaseModal/ModalEdite";
import { BsPen } from "react-icons/bs";
import { Ires } from "../../../../Interface.services/InterfaceModal";

export interface ItechMap{
  tech: Ires
}



export const List = ({tech}:ItechMap) => {
  const { openModalEdit, deleteTech, setTgetUpdate} = useContext(ModalContext);
  const { deletAnimation } = useContext(DataContext);

  return (
    <LiStyled key={tech.id} className={deletAnimation}>
    <h4>{tech.title} </h4>
    <span className="atualizar" onClick={()=> {
      setTgetUpdate (tech)
      openModalEdit()
      }}>
      <BsPen />
    </span>

    <DivList>
      <p>Nivel: {tech?.status}</p>
      <FaRegTrashAlt
        className="trash"
        onClick={() => deleteTech(tech.id)}
      />
    </DivList>
    <ModaEdite />
  </LiStyled>
  );
};
