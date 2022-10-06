import styled from "styled-components";

export const ButtonStyled = styled.button`
	width: 100%;
    height: 2.3rem;
	font-weight: 500;
	color: ${({color})=> `(--${color})`};
	color: var(--grey-0);
	font-size: var(--title2);
	background-color: ${({background})=> `var(--${background})`};
	transition: .2s linear;
	border-radius: 5px;
	cursor: pointer;

`