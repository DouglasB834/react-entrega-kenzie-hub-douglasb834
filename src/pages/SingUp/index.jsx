import { useForm } from "react-hook-form";
import { DivStyled } from "../Login/style";
import {
  DivChangePsw,
  FormStyled,
  InputStyled,
  SelectStyled,
} from "../../components/Form/Style";
import { yupResolver } from "@hookform/resolvers/yup";
import { UserSchema } from "./validator";
import { useContext, useState } from "react";

import { ImEye } from "react-icons/im";
import { GiEyelashes } from "react-icons/gi";
import { RequestContext } from "../../Context/ContexResquests";

export const SingUp = () => { 
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(UserSchema),
  });

  const { onSubmitRegister} = useContext(RequestContext);

  const [changePsw, setChangePsw] = useState(false);
  return (
    <DivStyled>
      <FormStyled
        className="animate__flipInX"
        onSubmit={handleSubmit(onSubmitRegister)}
      >
        <div className="boxtitle">
          <h3 className="title">Cadastrar</h3>
          <p>Rapido e grátis, vamos nessa</p>
        </div>

        <label htmlFor="name">Nome</label>
        <InputStyled
          type="text"
          id="name"
          placeholder="Digite aqui seu nome"
          {...register("name")}
        />
        <span className="errors">{errors.name?.message}</span>

        <label htmlFor="email">Email</label>
        <InputStyled
          type="email"
          id="email"
          placeholder="Digite aqui seu email"
          {...register("email")}
        />
        <span className="errors">{errors.email?.message}</span>

        <DivChangePsw>
          <input
            className="changeInput"
            id="password"
            type={changePsw === false ? "password" : "text"}
            placeholder="Digite password"
            {...register("password")}
          />
         
          <span>
            {changePsw ? (
              <ImEye onClick={() => setChangePsw(false)} />
            ) : (
              <GiEyelashes onClick={() => setChangePsw(true)} />
            )}
          </span>
        </DivChangePsw>
        <span className="errors">{errors.password?.message}</span>

        <label htmlFor="confirmPassword">Confimar Senha</label>
        <InputStyled
          type="password"
          id="confirmPassword"
          placeholder="Confirme sua senha"
          {...register("confirmPassword")}
        />
        <span className="errors">{errors.confirmPassword?.message}</span>

        <label htmlFor="bio">Bio</label>
        <InputStyled
          type="text"
          id="bio"
          placeholder="Digite aqui sobre voce"
          {...register("bio")}
        />
        <span className="errors">{errors.bio?.message}</span>

        <label htmlFor="contact">Contato</label>
        <InputStyled
          type="text"
          id="contact"
          placeholder="Opção de contato"
          {...register("contact")}
        />
        <span className="errors">{errors.contact?.message}</span>

        <label htmlFor="course_module">Selecione módulo</label>
        <SelectStyled id="course_module" {...register("course_module")}>
          <option value="Primeiro módulo (Introdução ao Frontend)">
            Primeiro módulo
          </option>
          <option value="Segundo módulo (Frontend Avançado)">
            "Segundo módulo
          </option>
          <option value="Terceiro módulo (Introdução ao Backend)">
            Terceiro módulo
          </option>
          <option value="Quarto módulo (Backend Avançado)">
            Quarto módulo
          </option>
        </SelectStyled>
        <span className="errors">{errors.course_module?.message}</span>

        <button type="submit" className="btnSingForm">
          Cadastrar
        </button>
      </FormStyled>
    </DivStyled>
  );
};
