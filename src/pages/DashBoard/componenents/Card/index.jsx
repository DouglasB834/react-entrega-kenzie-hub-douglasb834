import React, { useContext } from "react";
import { List } from "../List";
import { UlcardStyled } from "./style";
import { DataContext } from "../../../../Context/DataContext/context";


const Card = () => {
  const { user } = useContext(DataContext);

  return (
    <UlcardStyled>
      {user.techs.map((tech) => ( 
        <List tech={tech}/>


        ))}
    </UlcardStyled>
  );
};

export default Card;




      //   <LiStyled key={tech.id} className={deletAnimation}>
      //     <h4>{tech.title} </h4>
      //     <span className="atualizar" onClick={()=> {
      //       setTgetUpdate (tech)
      //       openModalEdit()
      //       }}>
      //       <GrDocumentUpdate />
      //     </span>

      //     <DivList>
      //       <p>Nivel: {tech?.status}</p>
      //       <FaRegTrashAlt
      //         className="trash"
      //         onClick={() => deleteTech(tech.id)}
      //       />
      //     </DivList>
      //     <ModaEdite />
      //   </LiStyled>
      // ))}