import React, { useContext } from "react";
import { DataContext } from "../../../../Context/DataContext/context";
import { ModalStyled, OverlayStyled } from "./style";

// interface ichildren{
//   children: React.ReactNode
// }





export const BaseMdal = ({ children }) => {
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
