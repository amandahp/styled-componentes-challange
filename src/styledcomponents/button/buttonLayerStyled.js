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
    box-shadow: -10px 10px 10px rgba(1,1,1,.60);
}


;`

export default ButtonIconStyled
