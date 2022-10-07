import styled from "styled-components";
import 'animate.css';

export const FormStyled = styled.form`
  width: 100%;
  max-width: 370px;
  border-radius: 5px;
  padding: 1rem;
  margin-bottom: 2rem;
  animation-duration:.7s;
  
  margin: 1rem auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: var(--grey-3);

  .errors{
    color: #e71060 ;
    text-align: center;
    margin-bottom: 8px;
  }

  .boxtitle{
    text-align: center;
    margin: 1rem 0;
    h3{
      font-weight: 700;
        font-size: 14px;
    }
    p{
      color: var(--grey-1);
      font-size: var(--title2);
    }
  }

  label {
    color: var(--grey-0);
    font-size: var(--title2);
    margin-bottom: 0.5rem;
  }

  .boxSingUp{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 5rem;
    margin-top: 1rem;
    
   

    p{
        font-size: var(--title2);
        color: var(--grey-0);
        margin-bottom: 1rem;
    }
  }

`;

export const InputStyled = styled.input`
  padding: 1rem;
  max-width: 100%;
  border-radius: 6px;
  margin-bottom: 1rem;
  background-color: var(--grey-2);
  border: solid  2px var(--grey-1);
  color: var(--grey-0);


`;
export const SelectStyled = styled.select`
  padding: 1rem;
  max-width: 100%;
  border-radius: 6px;
  margin-bottom: 1rem;
  background-color: var(--grey-2);
  border: solid  2px var(--grey-1);
  color: var(--grey-0);

`
export const DivChangePsw = styled.div`
  padding: 1rem;
  max-width: 100%;
  border-radius: 6px;
  margin-bottom: 1rem;
  background-color: var(--grey-2);
  border: solid  2px var(--grey-1);
  color: var(--grey-0);
  transition: .3s linear;

  .changeInput{
    background-color: var(--grey-2);
    border: none;
    width: 90%;
    color: var(--grey-0);
  }

  span{
    color: var(--grey-1);
    cursor: pointer;
  }
  span:hover{
    color: var(--grey-0);
    cursor: pointer;
  }
`

