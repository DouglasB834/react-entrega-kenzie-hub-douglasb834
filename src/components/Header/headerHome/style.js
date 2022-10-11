import styled from "styled-components";

export const HeaderStyledHome = styled.header`
display: flex; 
align-items: center;
width: 100%;
height: 120px;
 max-width: 380px;
 margin-right: 14px;
/* max-width: ${({location}) => location === "/singup"? `${380}px` : `${780}px` }; */


.container{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
   
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

//segunda div 
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
a{
    display: flex;
    padding: 1rem;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: 4.6rem;
    height: 37px;
    border-radius: 5px;
    background-color: var(--grey-3);
    color: var(--grey-0);
    transition: .2s linear;
    
    
}
a:hover{
    background-color: var(--grey-2);
}
`

export const DivstyledHeader = styled.div`
    width: 100%;
    margin:  0 auto;
    border-bottom: solid 1px var(--grey-2) ;
    
`