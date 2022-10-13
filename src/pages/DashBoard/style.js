import styled from "styled-components";
import 'animate.css';

export const MainStyled = styled.main`
    gap:1rem;
    width: 100%;
    display:flex;
    flex-direction: column;
    animation-duration: 1.5s ;
    h1{
        color: #fff;
    }
    .container{
        display: flex;
        justify-content: center;
        width:100%;
        color: var(--grey-0);
        padding: 0  1rem;
        animation-duration: 3s;

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

.teste{
   
}

`;


export const DivContainer = styled.div`
    display: flex;
    justify-content: center;
    width:100%;
    color: var(--grey-0);
    padding: 0  1rem;

`

export const SectionStyled = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    max-width: 732px;
`

export const FooterStyled = styled.footer`

height: 120px;
background-color: var(--grey-2);

div{
    text-align: center;
}
ul{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    height: 50px;

    li{
       
     
    }
}

`

