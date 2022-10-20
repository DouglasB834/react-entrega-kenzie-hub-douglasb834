import React, { useContext } from "react";
import { DataContext } from "../../../../Context/DataContext/context";
import { IChildren } from "../../../../Interface.services/servecisData";
import { ModalStyled, OverlayStyled } from "./style";

export const BaseMdal = ({ children }:IChildren) => {
  const { isModal} = useContext(DataContext);

  return (
    <>
      {isModal && (
        <ModalStyled>
          <OverlayStyled>{children}</OverlayStyled>
        </ModalStyled>
      )}
    </>
  );
};
