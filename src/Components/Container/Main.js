import React, { useEffect, useRef, useState } from 'react';
import {
    MainContainer, 
    MainContents, 
    MainFooter, 
    MainFooterBox, 
    MainHeader,
    NavButton,
} from '../Presenter/MainPresenter';
import {AiFillGithub} from 'react-icons/ai';
import {SiNaver, SiTistory} from 'react-icons/si';
import MainContentsComponent from './MainContentsComponent';

const Main = () => {
    const [position, setPosition] = useState(0);
    let mainContentsRef = useRef();
    
    let onClickHome = () => {
        mainContentsRef.current.childNodes[0].scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    let onScroll = () => {
        setPosition(window.scrollY);
    }

    useEffect(() => {
        window.addEventListener("scroll", onScroll);
        return () => {
            window.removeEventListener("scroll", onScroll);
        };
    }, [position]);


    let onClickNav = (e) => {
        if(e.target.attributes[0].value === 'about') {
            mainContentsRef.current.childNodes[1].scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        else if(e.target.attributes[0].value === 'stack') {
            mainContentsRef.current.childNodes[2].scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        else if(e.target.attributes[0].value === 'archiving') {
            mainContentsRef.current.childNodes[3].scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        else if(e.target.attributes[0].value === 'project') {
            mainContentsRef.current.childNodes[5].scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }

    return (
        <>
            <MainHeader position={position}>
                <div>
                    <div onClick={onClickHome}>Bomi's</div>
                    <div>
                        <NavButton onClick={onClickNav} value='about'>About</NavButton>
                        <NavButton onClick={onClickNav} value='stack'>Stack</NavButton>
                        <NavButton onClick={onClickNav} value='archiving'>Archiving</NavButton>
                        <NavButton onClick={onClickNav} value='project'>Project</NavButton>
                    </div>
                </div>
            </MainHeader>
            <MainContainer>
                <MainContents>
                    <MainContentsComponent ref={mainContentsRef}/>
                </MainContents>
            </MainContainer>
            <MainFooter>
                <MainFooterBox>
                    <div>
                        <div>
                            <a href='https://github.com/bomi8489' target='_blank' rel="noreferrer"><AiFillGithub size={36}/></a>
                        </div>
                        <div>
                            <a href='https://37degree.tistory.com/' target='_blank' rel="noreferrer"><SiTistory size={33}/></a>
                        </div>
                        <div>
                            <a href='https://blog.naver.com/PostList.naver?blogId=b____omi' target='_blank' rel="noreferrer"><SiNaver size={33} color='white'/></a>
                        </div>
                    </div>
                    <span>© 2023. Kwon Ki Beom. All rights reserved.</span>
                </MainFooterBox>
            </MainFooter>
        </>
    )
}

export default Main;