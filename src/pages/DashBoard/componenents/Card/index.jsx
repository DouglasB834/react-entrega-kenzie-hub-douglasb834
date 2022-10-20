import React, { useContext } from "react";
import { List } from "../List";
import { UlcardStyled } from "./style";
import { DataContext } from "../../../../Context/DataContext/context";


const Card = () => {
  const { user, tecList } = useContext(DataContext);

  return (
    <UlcardStyled>
      {tecList.map((tech) => ( 
        <List key={tech.id} tech={tech}/> ))}
    </UlcardStyled>
  );
};
export default Card;