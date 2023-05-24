import styled from 'styled-components';

const MainContainer = styled.div`
margin: auto;
width: 1200px;
height: 100vh;
position: relative;

> div:nth-child(2) {
    display: flex;
}
`

const MainHeader = styled.div`
height: 120px;
display: flex;
justify-content: center;
align-items: center;
font-size: 50px;
`

const MainContents = styled.div`
`

const MainFooter = styled.div`
width: 100%;
position: absolute;
bottom: 0px;
display: flex;
flex-direction: column;
align-items: center;
> div {
    margin: 17px 0px;
    font-size: 17px;
    > a {
        display: flex;
        align-items: center;
        > svg {
            margin-left: 10px;
        }
        > img {
            width: 30px;
            height: 30px;
            margin-left: 10px;
        }
    }
}
`

export { 
    MainContainer,
    MainHeader,
    MainContents,
    MainFooter,
};