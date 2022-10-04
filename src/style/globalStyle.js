import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600;700;800&display=swap');

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
	background-color:var(--grey-3);
}

img{
	/* max-width: 100%; */
}


:root{
    --color-primary:#FF577F;
    --color-primary-Focus:#FF427F;
    --color-primary-Negative:#59323F;

    /* Grey Scale Palette */
    --grey-4:#121214;
    --grey-3:#212529;
    --grey-2:#343B41;
    --grey-1:#868E96
    --grey-0:#F8F9FA
/* Feedback Palette */
    --sucess: #3FE864;
    --negative: #E83F5B;

    /* Typography */
    --title1: 1rem //16px
    --headline: .75rem//12px
    

}












`