import styled from "styled-components";

export const DivErrorStyled = styled.div`
width: 100%;
height: 100%;
display: flex;
position: relative;
justify-content: center;

img{
    max-width: 100%;
}

.linkBackHome{
    color: var(--grey-0);
    bottom:10% ;
    border-radius: 5px;
    padding: 1rem;
    margin-top: 1rem;
    position: absolute;
    background-color: var(--grey-1);

}

.linkBackHome:hover{
    background-color: var(--grey-3);
}

`

export const ButtonStyled = styled.button`
    bottom:10% ;
    border-radius: 5px;
    padding: .5rem;
    margin-top: 1rem;
    position: absolute;

`