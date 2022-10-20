import styled from "styled-components";


export const DivModalEdite = styled.div`

animation-duration:  1s;

.containerBtn{
    display: flex;
    gap: 1rem;
}

.delitetec{
    padding:1rem;
    cursor: pointer;
    font-weight: 500;
    border-radius: 5px;
    background-color: var(--grey-1);
    color: var(--grey-0);
	font-size: var(--title2);
    transition: .2s linear;
}

.delitetec:hover{
    background-color: var(--grey-2);
    ;
}

`