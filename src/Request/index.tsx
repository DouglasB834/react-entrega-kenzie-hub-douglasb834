
import { useNavigate } from "react-router-dom";
import { instance } from "../Api/instance";
import { IUser } from "../Interface.services/servecisData";

export const Register = (data: IUser):void => {

  const navigate = useNavigate();

  instance.post<IUser>(`/users`, data)
  .then((res) => {
      navigate("/");
    })
    .catch((error) => {
      console.log(error);
    });
};
