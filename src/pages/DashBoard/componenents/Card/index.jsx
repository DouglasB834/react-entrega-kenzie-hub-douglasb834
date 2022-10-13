import React, { useContext, useState } from "react";
import { List } from "../List";
import { UlcardStyled } from "./style";
import { DataContext } from "../../../../Context/DataContext/context";
import { DivList, LiStyled } from "../List/style";
import { GrDocumentUpdate } from "react-icons/gr";
import { ModaEdite } from "../BaseModal/ModalEdite";
import { FaRegTrashAlt } from "react-icons/fa";
import { ModalContext } from "../../../../Context/ModalContext/modal";

const Card = () => {
  const { openModalEdit, deleteTech, setTgetUpdate } = useContext(ModalContext);
  const { user, deletAnimation } = useContext(DataContext);

 

  return (
    <UlcardStyled>
      {user.techs.map((tech) => (
        <LiStyled key={tech.id} className={deletAnimation}>
          <h4>{tech.title} </h4>
          <span className="atualizar" onClick={()=> {
            setTgetUpdate (tech)
            openModalEdit()
            }}>
            <GrDocumentUpdate />
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
      ))}
    </UlcardStyled>
  );
};

export default Card;
