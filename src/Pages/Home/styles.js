import styled from "styled-components"

export const Container = styled.div`
    background: #0A0A10;
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 100vh;
`

export const Image = styled.img`
    width: 322px;
    height: 334px;
    margin-top: 15px;
`

export const ContainerData = styled.div`
    display: flex;
    flex-direction: column;
`

export const H1 = styled.h1`
    font-style: normal;
    font-weight: 700;
    font-size: 28px;
    line-height: 33px;
    text-align: center;
    color: #FFFFFF;
    margin-top: 25px;
`

export const Label = styled.p`
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    letter-spacing: -0.408px;
    color: #EEEEEE;
    margin-left: 15px;
    margin-top: 46px;
`

export const Input = styled.input`
    width: 342px;
    height: 58px;
    background: rgba(255, 255, 255, 0.25);
    border-radius: 14px;
    flex: none;
    order: 0;
    flex-grow: 0;
    padding-left: 15px;
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 21px;
    color: #FFFFFF;
    border: none;
`

export const Button = styled.button`
    width: 342px;
    height: 68px;
    background: #D93856;
    font-style: normal;
    font-weight: 900;
    font-size: 17px;
    line-height: 2px;
    text-align: center;
    color: #FFFFFF;
    border: none;
    cursor: pointer;
    margin-top: 46px;
    :hover{
        opacity: 0.5;
    }
    :active{
        opacity: 0.7;
    }
`