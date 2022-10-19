import styled from "styled-components";
import 'animate.css';

export const ModalStyled = styled.div`
position: fixed;
z-index: 101;
width: 100%;
height: 100vh;
inset: 0; 

background-color: var(--bg-modal);
`
export const OverlayStyled = styled.div`
width: 100%;
height: 100vh;
display: flex;
align-items: center;
justify-content: center;
transition: 2s;

@media  (min-width: 380px){
 form{
    width: 369px;
 }   
} 
.containerCadstrar{
 animation-duration: .7s;
}
`
export const DivtitleModal = styled.div`
    height: 40px;
    display: flex;
    margin: 0 auto;
    padding: 1.4rem;
    max-width: 370px;
    align-items: center;
    color: var(--grey-0);
    justify-content: space-between;
    background-color: var(--grey-2);
    transform: translateY(20px);


    span{
        cursor: pointer;
        transition: .3s linear;
        font-size: 1.2rem;
        
    }
    span:hover{
           color: var(--negative);
            transform: rotate(315deg);
    }
    
`