import styled from "styled-components";

export const HeaderStyledHome = styled.header`
display: flex; 
align-items: center;
height: 120px;
width: 100%;
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

button{
    cursor: pointer;
    width: 5.6rem;
    height: 31px ;
    border-radius: 5px;
    background-color: var(--grey-3);
    color: var(--grey-0);
    transition: .2s linear;
    

}
button:hover{
    background-color: var(--grey-2);
}

`