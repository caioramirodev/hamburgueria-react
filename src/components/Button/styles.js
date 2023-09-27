import styled from 'styled-components'


export const Button = styled.button`

    width: 342px;
    height: 68px;
    background: ${props => props.isBack ? 'rgba(255, 255, 255, 0.14)' : '#D93856'} ;
    border: none;
    outline: none;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    font-size: 17px;
    font-style: normal;
    font-weight: 900;
    line-height: 2.5px;
    color: #FFF;

    margin-top: ${ props => props.isBack ? '85px' : '76px'};
    margin-bottom: ${ props => props.isBack && '20px'};


    &:hover{
        opacity: 0.8;
    }
   
   &:active{
        opacity: 0.5;
   }
`;