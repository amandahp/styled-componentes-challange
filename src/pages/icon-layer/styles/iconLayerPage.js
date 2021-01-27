import styled, { createGlobalStyle } from 'styled-components';
 
export const GlobalStyle = createGlobalStyle`
  body {
    height: 100%;
    margin: 0;
    padding: 0;
    background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
    url(https://images.pexels.com/photos/70741/cereals-field-ripe-poppy-70741.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940);
    font-family: Open-Sans, Helvetica, Sans-Serif;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const List = styled.ul`
    position: relative;
    margin: 0;
    padding: 0;
    display: flex;
;`

export const ListItem = styled.li`
    position: relative;
    list-style: none;
    width: 60px;
    height: 60px;
    margin: 0 30px;
    transform: rotate(-30deg) skew(25deg);
    background: #ccc;
    &:hover{
        box-shadow: -1px 1px 1px rgba(0,0,0,.80);
    }
    &:nth-child(1){
        background: ${props => props.backgroundList};
        &:hover{
            box-shadow: -10px 10px 10px rgba(1,1,1,.80);
        }
    }
    &:nth-child(2){
        background: ${props => props.backgroundList};
        &:hover{
            box-shadow: -10px 10px 10px rgba(1,1,1,.80);
        }
    }
    &:nth-child(3){
        background: ${props => props.backgroundList};
        &:hover{
            box-shadow: -10px 10px 10px rgba(1,1,1,.80);
        }
    }
    &:nth-child(4){
        background: ${props => props.backgroundList};
        &:hover{
            box-shadow: -10px 10px 10px rgba(1,1,1,.80);
        }
    }
    &:nth-child(5){
        background: ${props => props.backgroundList};
        &:hover{
            box-shadow: -10px 10px 10px rgba(1,1,1,.80);
        }
    }
;`

export const Span = styled.span`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${props => props.backgroundSpan};
    transition: 0.1s;
    display: flex !important;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 30px !important;
    &:nth-child(5){
        transform: translate(40px, -40px);
        opacity: 1;
        &:hover{
            box-shadow: -10px 10px 10px rgba(1,1,1,.80);
        }
    }
    &:nth-child(4){
        transform: translate(30px, -30px);
        opacity: 0.8;
        &:hover{
            box-shadow: -10px 10px 10px rgba(1,1,1,.80);
        }
    }
    &:nth-child(3){
        transform: translate(20px, -20px);
        opacity: 0.6;
        &:hover{
            box-shadow: -10px 10px 10px rgba(1,1,1,.80);
        }
    }
    &:nth-child(2){
        transform: translate(10px, -10px);
        opacity: 0.4;
        &:hover{
            box-shadow: -10px 10px 10px rgba(1,1,1,.60);
        }
    }
    &:nth-child(1){
        transform: translate(0,0);
        opacity: .2;
        &:hover{
            box-shadow: -10px 10px 10px rgba(1,1,1,.80);
        }
    }
;`