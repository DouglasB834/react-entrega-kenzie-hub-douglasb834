import styled from "styled-components";

export const UserDivStyled = styled.div`
  width: 100%;
  height: 8rem;
  display: flex;
  padding: 1rem 0;
  flex-direction: column;
  justify-content: center;
  border-bottom: solid 1px var(--grey-2);

  .contentUser {
    gap: 1rem;
    width: 100%;
    padding: 1rem;
    display: flex;
    margin: 0 auto;
    max-width: 780px;
    flex-direction: column;

    h2 {
      color: var(--grey-0);
      font-size: var(--title);
    }

    p {
      font-size: var(--title2);
      color: var(--grey-1);
    }

    @media (min-width: 498px) {
      flex-direction: row;
      justify-content: space-between;
    }

    /* @media (min-width:779 ){
       width: 780px;
       margin:  0 auto;
        
    } */
  }
`;
