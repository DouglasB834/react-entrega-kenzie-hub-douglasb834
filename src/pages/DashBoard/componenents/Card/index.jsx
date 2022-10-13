import React, { useContext } from "react";
import { List } from "../List";
import { UlcardStyled } from "./style";
import { DataContext } from "../../../../Context/DataContext/context";


const Card = () => {
  const { user } = useContext(DataContext);

  return (
    <UlcardStyled>
      {user.techs.map((tech) => ( 
        <List tech={tech}/> ))}
    </UlcardStyled>
  );
};
export default Card;