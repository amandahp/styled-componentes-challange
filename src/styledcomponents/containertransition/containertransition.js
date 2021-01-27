import styled, {keyframes} from "styled-components";

export const animates = keyframes`
    0%
    {
        transform: translate(0, -50%);
    }
    100%
    {
        transform: translate(-50%, -50%);
    }
`

export const Main = styled.div`
    width: 100%;
    height: 100%;
    background: #80B918;
    box-sizing: border-box;
    overflow: hidden;
    position: absolute;

;`

export const Sliding = styled.span`
    position: absolute;
    top: 50%;
    color: #DDDF00;
    white-space: nowrap;
    font-size: 12em;
    line-height: 220px;
    overflow: hidden;
    font-family: Open-Sans, Helvetica, Sans-Serif;
    animation: ${animates} 20s linear infinite;

;`

export const Wrapper = styled.span`
    height: 100%;
    width: 50%;
    background: #2B9348;
    overflow: hidden;
    color: #AACC00;
    position: absolute;
    top: 0;
    left: 0;
`

export const Span = styled.span`
    top: 0;
;`
