import styled from 'styled-components';

const MainContainer = styled.div`
    margin: auto;
    width: 1200px;
    position: relative;
`

const MainHeader = styled.div`
    display: flex;
    justify-content: center;
    background-color: ${props => props.position === 0 ? '#0E1116' : 'white'};
    color: ${props => props.position === 0 ? 'white' : 'black'};
    box-shadow: ${props => props.position === 0 ? 'none' : '0 1px 0.3rem hsla(0,0%,80%,.8)'};
    position: fixed;
    width: 100vw;
    height: 72px;
    z-index: 100;
    > div {
        width: 1200px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 30px;
        font-weight: bold;
        > div:first-child {
            &:hover {
                cursor: pointer;
            }
        }
        > div:nth-child(2) {
            display: flex;
        }
    }
`

const BlogHead = styled.div`
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
    margin: 0 20px;
    font-size: 25px;
    font-weight: bold;
    &:hover {
        cursor: pointer;
        transition: transform 0.1s ease-in-out;
        transform: translateY(-3px);
    }
`

const Banner = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 150px;
    margin-bottom: 100px;

    > div {
        margin-bottom: 40px;
    }
`

const AboutMe = styled.div`
    padding-top: 150px;
    padding-bottom: 40px;
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
    padding-top: 150px;
    > div {
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
    }
`

const ArchivingComponent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 150px;
    padding-bottom: 40px;
    margin-bottom: 100px;
    width: 1200px;
    
    > div:first-child {
        font-size: 50px;
        font-weight: bold;
        margin: 30px 0;
        padding: 50px 0;
    }

    > div:nth-child(2) {
        display: flex;
        flex-direction: column;
        > div {
            display: flex;
            margin: 10px 0;
            > div {
                font-size: 36px;
                width: 240px;
            }
            > a {
                display: flex;
                align-items: center;
                > svg {
                    margin-left: 20px;
                    width: 36px;
                    height: 36px;
                    &:hover {
                        cursor: pointer;
                    }
                }
            }
        }
    }
`

const ProjectComponent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 150px;
    padding-bottom: 40px;
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
        border: solid 3px white;
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
    BlogHead,
    MainContents,
    Banner,
    AboutMe,
    AboutContents,
    StackComponent,
    ArchivingComponent,
    ProjectComponent,
    NavButton,
    ProfileComponent,
    GitChart,
    MainFooter,
    MainFooterBox,
};