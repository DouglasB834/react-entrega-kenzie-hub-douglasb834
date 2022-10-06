import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, b, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video, button {
	margin: 0;
	padding: 0;
	border: 0;
	box-sizing: border-box;
	vertical-align: baseline;
	font-family: 'Inter', sans-serif;
	text-decoration: none;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
body{
	background-color:var(--grey-4);
}

img{
	/* max-width: 100%; */
}

input{
	outline: none;
}


:root{
    --color-primary:#FF577F;
    --color-primary-Focus:#FF427F;
    --color-primary-Negative:#59323F;

    /* Grey Scale Palette */
    --grey-4:#121214;
    --grey-3:#212529;
    --grey-2:#343B41;
    --grey-1:#868E96;
    --grey-0:#F8F9FA;
/* Feedback Palette */
    --sucess: #3FE864;
    --negative: #E83F5B;

    /* Typography */
    --title: 1.12rem ;//16px
    --title1: 1rem ;//16px
    --title2: .75rem;//12px
    

}

.btnLogin, .singUp ,.btnSingForm{
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
    height: 2.3rem;
	font-weight: 500;
	color: var(--grey-0);
	font-size: var(--title2);
	background-color: var(--color-primary);
	transition: .2s linear;
	border-radius: 5px;
	cursor: pointer;
}

.title{
	font-size: var(--title1) ;
	color: var(--grey-0);
	margin-bottom: 1rem;
}
.btnSingForm{
	background-color: var(--color-primary-Negative);
}
.btnSingForm:hover{
	background-color: var(--color-primary);
}


.singUp{
	background-color: var(--grey-1);
}

.btnLogin:hover{
	background-color: var(--color-primary-Focus);
}

.singUp:hover{
	background-color: var(--grey-2);
}

@media (min-width: 424px ) {
	.btnLogin, .singUp, .btnSingForm{
        height:3rem ;

	}
    }


`
