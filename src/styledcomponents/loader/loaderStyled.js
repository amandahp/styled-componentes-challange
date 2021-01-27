import styled, {keyframes}  from 'styled-components'

export const RingsAnimation = keyframes`
    0%
    {
        transform: rotate(0deg);
    }
    100%
    {
        transform: rotate(360deg);
    }
`



export const Container = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

;`

export const  Ring = styled.div`
    animation: ${RingsAnimation} 1s linear infinite;
    transform: translateZ(0);
    border-top: 2px solid #4895EF;
    border-right: 2px solid #4361EE;
    border-bottom: 2px solid #7209B7;
    border-left: 4px solid #B5179E;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    box-shadow: 0 4px 0 #F72585;
    background: transparent;
;`

export const TextTipe = styled.div`
    width: 300px;
    height: 300px;
    border-radius: 50%;
    color: #4895EF;
    position: absolute;
    top: 0;
    left: 0;
    text-align: center;
    line-height: 300px;
    font-size: 2em;
    background: transparent;
    box-shadow: 0 0 5px rgba(0,0,0,.2)
;`