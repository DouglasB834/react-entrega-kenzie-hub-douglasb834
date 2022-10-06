import styled from "styled-components";

export const HeaderStyledHome = styled.header`
display: flex; 
align-items: center;
height: 120px;
/* max-width: 380px; */
max-width: ${({location}) => location === "/singup"? `${380}px` : `${780}px` };
margin: 0 auto;
.container{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    .boxLogo{
        
        padding: 1rem ;

    }
}

a{  
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: 5.6rem;
    height: 31px ;
    border-radius: 5px;
    background-color: var(--grey-3);
    color: var(--grey-0);
    transition: .2s linear;
    

}
a:hover{
    background-color: var(--grey-2);
}

`