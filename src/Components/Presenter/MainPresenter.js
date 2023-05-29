import styled from 'styled-components';

const MainContainer = styled.div`
margin: auto;
width: 1200px;
position: relative;

> div:nth-child(2) {
    display: flex;
    justify-content: center;
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
display: flex;
flex-direction: column;

> div:first-child {
    text-align: left;
    margin: 50px 0;
    > div {
        display: flex;
        margin: 40px 0;
    }
}
`

const NavButton = styled.div`
margin: 0 20px;
font-size: 30px;
font-weight: bold;
&:hover {
    cursor: pointer;
}
`

const About = styled.div`
display: flex;
flex-direction: column;
align-items: center;

> div {
    margin-bottom: 40px;
}
`

const ProfileComponent = styled.div`
width: 460px;
text-align: center;
> h2 {
    margin: 20px 0;
}

> div {
    margin: 20px 0;
}
`

const GitChart = styled.img`
width: 860px;
margin: 20px 0;
`

const MainFooter = styled.div`
padding-top: 40px;
padding-bottom: 40px;
background-color: #222222;
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
`

const MainFooterBox = styled.div`
display: flex;
flex-direction: column;
align-items: center;

> div {
    display: flex;
    > div{
        margin: 7px 0px;
        font-size: 17px;
        > a {
            > svg {
                margin: 0 10px;
            }
        }
    }
}

> div:last-child {
    margin-bottom: 40px;
}
`

export { 
    MainContainer,
    MainHeader,
    MainContents,
    About,
    NavButton,
    ProfileComponent,
    GitChart,
    MainFooter,
    MainFooterBox,
};