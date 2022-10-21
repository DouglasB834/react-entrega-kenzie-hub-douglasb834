import { useContext } from "react";
import { DataContext } from "../../Context/DataContext/context";
import { AddTec } from "./componenents/AddTecnologias";
import { BaseMdal } from "./componenents/BaseModal";
import { ModalAddtec } from "./componenents/BaseModal/ModalAddTec";
import Card from "./componenents/Card";
import { User } from "./componenents/User";
import { DivContainer, MainStyled, SectionStyled } from "./style";
import Loading from "../../assets/Loading_icon.gif";
import { ModaEdite } from "./componenents/BaseModal/ModalEdite";

export const DashBoard = () => {
  const { navigate, loading, user, token } = useContext(DataContext);

  if (loading) {
    return <img src={Loading} alt="" />;
  }

  return (
    <MainStyled className="animate__fadeIn">
      <>
        {token ? (
          <>
            <BaseMdal>
              <ModalAddtec />
            </BaseMdal>

            <User />
            <DivContainer className="container">
              <SectionStyled>
                <AddTec />
                <Card />
              </SectionStyled>
            </DivContainer>
            <ModaEdite />
          </>
        ) : (
          navigate("/")
        )}
      </>
    </MainStyled>
  );
};
