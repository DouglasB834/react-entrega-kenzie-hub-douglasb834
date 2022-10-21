import React, { useContext } from "react";
import { List } from "../List";
import { UlcardStyled } from "./style";
import { DataContext } from "../../../../Context/DataContext/context";
import { ITechs } from "../../../../Interface.services/servecisData";


const Card = () => {
  const { tecList } = useContext(DataContext);
  return (
    <UlcardStyled>
      {tecList.map((tech:ITechs) => ( 
        <List key={tech.id} tech={tech}/> ))}
    </UlcardStyled>
  );
};
export default Card;