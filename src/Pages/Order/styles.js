import styled from "styled-components"

export const Container = styled.div`
    background: #0A0A10;
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 100vh;
`

export const Image = styled.img`
    width: 242px;
    height: 254px;
    margin-top: 15px;
`

export const ContainerData = styled.div`

`

export const H1 = styled.h1`
    font-style: normal;
    font-weight: 700;
    font-size: 28px;
    line-height: 33px;
    text-align: center;
    color: #FFFFFF;
    margin-top: 25px;
    margin-bottom: 35px;
`

export const Order = styled.p`
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 22px;
    letter-spacing: -0.408px;
    color: #EEEEEE;
`
export const NameClient = styled.p`
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    color: #FFFFFF;
`

export const TrashImage = styled.img`
    width: 24px;
    height: 28px;
`

export const ListOrder = styled.div`
    width: 342px;
    height: 101px;
    background: rgba(255, 255, 255, 0.25);
    border-radius: 14px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    margin-bottom: 25px;
    button{
        background: none;
        border: none;
        cursor: pointer;
        &:hover {
            opacity: 0.7;
        }
        &:active {
            opacity: 0.5;
        }
    }
`

export const Data = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    gap: 20px;
    
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