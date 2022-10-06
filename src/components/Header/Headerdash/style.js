import styled from "styled-components";

export const HeaderStyled = styled.header`
display: flex; 
align-items: center;
height: 120px;
max-width: 780px;
padding: 0 1rem;
margin:  0 auto;
.container{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    margin: 0 auto;
    .boxLogo{
        
        padding: 1rem ;
    }
}
button{
    cursor: pointer;
    width: 4.6rem;
    height: 37px;
    border-radius: 5px;
    background-color: var(--grey-3);
    color: var(--grey-0);
    transition: .2s linear;
    
}
button:hover{
    background-color: var(--grey-2);
}
`

export const DivstyledHeader = styled.div`
    width: 100%;
    margin:  0 auto;
    border-bottom: solid 1px var(--grey-2) ;
    
`