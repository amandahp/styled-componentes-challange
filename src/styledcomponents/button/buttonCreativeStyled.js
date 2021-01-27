import styled from 'styled-components'

const ButtonCreativeStyled = styled.button`
    border: 1px solid rgb(146, 148, 248);
    position: relative;
    overflow: hidden;
    background: transparent;
    &:hover{
        box-shadow: 1px 1px 25px 10px rgba(146, 148, 248, 0.4);
    };
    &:before{
        content: "";
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        transition: all 1250ms;
        -webkit-transition-duration: all 1250ms;
        -moz-transition-duration:all 1250ms;
        -o-transition-duration: all 1250ms;
        transition-duration: all 1250ms;
    }
    &:hover:before {
        left: 100%;
    }
    font-size: 1.5rem;
    padding: 1rem 3rem;
    color: #f4f4f4;
    text-transform: uppercase;
;`

export default ButtonCreativeStyled