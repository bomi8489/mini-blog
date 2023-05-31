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
    justify-content: space-between;
    align-items: center;
    font-size: 35px;
    font-weight: bold;

    > div:nth-child(2) {
        display: flex;
    }
`

const MainContents = styled.div`
    display: flex;
    flex-direction: column;

    > div {
        display: flex;
        flex-direction: column;
        align-items: center;
        > div~hr {
            width: 1200px;
        }
    }
`

const NavButton = styled.div`
    margin: 0 10px;
    font-size: 25px;
    font-weight: bold;
    &:hover {
        cursor: pointer;
    }
`

const Banner = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 100px;

    > div {
        margin-bottom: 40px;
    }
`

const AboutMe = styled.div`
    padding: 40px 0;
    margin-bottom: 100px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`

const AboutContents = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 400px;
    margin: 20px 0;
    > svg {
        width: 46px;
        height: 46px;
    }
    > div:nth-child(2) {
        display: flex;
        flex-direction: column;
        margin-left: 30px;
        > div:first-child {
            font-size: 24px;
            font-weight: bold;
        }
        > div:nth-child(2) {
            margin-top: 8px;
        }
    }
`

const StackComponent = styled.div`
    width: 800px;
    padding: 40px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 100px;
    border: solid 5px white;
    border-radius: 20px;

    > div:first-child {
        font-size: 50px;
        font-weight: bold;
        margin-bottom: 30px;
    }

    >div:nth-child(2) {
        width: 270px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        > div {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin: 20px 30px;
            &:hover {
                transition: transform 0.1s ease-in-out;
                transform: scale(1.10) translateY(-5px);
            }
            > div {
                font-weight: bold;
            }
            > svg {
                width: 66px;
                height: 66px;
            }
        }
    }
`

const ProjectComponent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px 0;
    margin-bottom: 100px;

    div:has(img) {
    > img {
        margin-top: 20px;
        width: 400px;
    }
    }

    > div {
        width: 1090px;
        margin: 30px 0;
        display: flex;
        justify-content: space-between;
        border: solid 5px white;
        border-radius: 20px;
        padding: 50px;

        > div:first-child {
            > div:first-child {
                font-size: 20px;
                font-weight: bold;
            }
        }

        > div:nth-child(2) {
            width: 500px;
            margin-left: 40px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            font-size: 18px;

            > div {
                margin: 5px 0;
            }

            > div:first-child {
                margin-bottom: 50px;
            }

            > div:has(div) {
                display: flex;
                justify-content: space-between;
                > div:first-child {
                    width: 50px;
                    font-weight: bold;
                }
                > a {
                    margin-left: 30px;
                }
                > div:nth-child(2) {
                    margin-left: 30px;
                }
            }
        }
    }

    > div:first-child {
        justify-content: center;
        font-size: 50px;
        font-weight: bold;
        margin-bottom: 30px;
        border: none;
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
    margin-top: 50px;
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
    Banner,
    AboutMe,
    AboutContents,
    StackComponent,
    ProjectComponent,
    NavButton,
    ProfileComponent,
    GitChart,
    MainFooter,
    MainFooterBox,
};