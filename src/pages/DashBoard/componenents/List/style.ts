import styled from "styled-components";

export const LiStyled = styled.li`
  min-height: 49px;
  margin: 1rem;
  padding: 0 1rem;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: var(--titleList);
  background-color: var(--grey-4);
  cursor: pointer;
  animation-duration: 1s;
  transition: 0.3s;

  .atualizar{
    font-size: 1.2rem;
  }

  :hover {
    background-color: var(--grey-1);
  }

  :focus {
    background-color: var(--grey-0);
  }

  p {
    font-size: var(--title2);
    color: var(--grey-1);
  }

  .trash {
    transition: 0.3s linear;
    :hover {
      color: var(--negative);
    }
  }
`;

export const DivList = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;
