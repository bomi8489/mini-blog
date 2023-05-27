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

const NavigationAbout = styled.div`
display: flex;
flex-direction: column;

> div {
    display: flex;
    > div:first-child {
        width: 400px;
        height: 500px;
        background-color: black;
    }
}
`

const ProfileComponent = styled.div`
width: 460px;
> h2 {
    margin: 20px 0;
    text-align: right;
}

> div {
    margin: 20px 0;
    text-align: right;
}
`

const GitChart = styled.img`
width: 860px;
margin: 20px 0;
`

const MainFooter = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
`

const MainFooterBox = styled.div`
display: flex;
flex-direction: column;

> div {
    margin: 7px 0px;
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

> div:last-child {
    margin-bottom: 40px;
}
`

export { 
    MainContainer,
    MainHeader,
    MainContents,
    NavigationAbout,
    NavButton,
    ProfileComponent,
    GitChart,
    MainFooter,
    MainFooterBox,
};