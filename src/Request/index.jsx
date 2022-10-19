
import { useNavigate } from "react-router-dom";
import { instance } from "../Api/instance";

// interface iProps{
//   data: string;
// }

export const Register = (data) => {

  const navigate = useNavigate();

  instance.post(`/users`, data)
  .then((res) => {
      navigate("/");
    })
    .catch((error) => {
      console.log(error);
    });
};
