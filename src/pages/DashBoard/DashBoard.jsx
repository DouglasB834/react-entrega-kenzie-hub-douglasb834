import { useContext} from "react";
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

  // useEffect(() => {
  //   if (!token) {
  //     navigate("/");
  //   }
  // }, []);

  if (loading) {
    return null;
  }

  return (
    <MainStyled className="animate__fadeIn">

      {user ? (
        <>
          <BaseMdal>
            <ModalAddtec />
          </BaseMdal>

          <User user={user} />

          <DivContainer className="container">
            <SectionStyled>
              <AddTec />
              <Card />
            </SectionStyled>
          </DivContainer>
          {/* modal  */}
          <ModaEdite/>
        </>
      ) : (
        navigate("/")
      )}
    </MainStyled>
  );
};
