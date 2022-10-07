import styled from "styled-components";

export const MainStyled = styled.main`
    gap:1rem;
    width: 100%;
    display:flex;
    flex-direction: column;
    .container{
        display: flex;
        justify-content: center;
        width:100%;
        color: var(--grey-0);
        padding: 0  1rem;
        

        section{
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            width: 100%;
            max-width: 732px;

           /* div{
            width: 100%;
            text-align: start;
           } */
        }
    }




`;
