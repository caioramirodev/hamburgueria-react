import styled from 'styled-components'

export const Container = styled.div`
    background-color: #0A0A10;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    gap: 25px;

`
export const Image = styled.img`

margin-top: 40px;

`

export const ContainerItens = styled.div`

    display: flex;
    flex-direction: column;
    padding: 25px 36px;
    height: 100%;
    min-height: 100vh;
`




export const Order = styled.li`
    display: flex;
    justify-content: space-around;

    width: 342px;
    height: 101px;

    border-radius: 14px;
    background: rgba(255, 255, 255, 0.25);
    margin-bottom: 18px;


    div{
    display: flex;
    flex-direction: column;
    justify-content:space-around;
    margin-left: 27px;
}

button{
    background: none;
    border: none;
    cursor: pointer;
    padding-right: 20px;
    
    &:hover{
        opacity: 0.8;
    }
   
   &:active{
        opacity: 0.5;
   }
}
`

export const POrder = styled.p `
    font-size: 18px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    color: #FFFFFF;
`

export const PClient = styled.p `
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    color: #FFFFFF;

`