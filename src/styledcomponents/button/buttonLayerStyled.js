import styled, {keyframes} from "styled-components";

const animation = keyframes`
    0% {
        opacity: 0;
        transform: translateY(30px);
    }
    
    100% {
        opacity: 1;
        transform: translateY(0px);
    }
`
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
    animation: ${animation} 5s ease-out;
    animation-fill-mode: backwards;
    &:hover{
        box-shadow: -1px 1px 1px rgba(0,0,0,.10);
    }

;`





export default ButtonIconStyled
