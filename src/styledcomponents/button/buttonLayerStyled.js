import styled from "styled-components";

const ButtonIconStyled = styled.button`
background-color: ${props => props.background};
border: none;
color: white;
font-size: 1.2rem;
padding: 1rem 1.5rem;
cursor: pointer;
opacity: 1;
width: 60px;
height: 60px;
margin: 0 30px;
position: relative;
display: flex;
justify-content: center;
align-items: center;
&:hover{
    box-shadow: -1px 1px 1px rgba(0,0,0,.10);
}


;`

export default ButtonIconStyled
