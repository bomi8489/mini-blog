import React from 'react';
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
    return (
        <>
        <MainContainer>
            <MainHeader>
                <div>Bomi's</div>
                <div>
                    <NavButton value='about'>About</NavButton>
                    <NavButton value='stack'>Stack</NavButton>
                    <NavButton value='archiving'>Archiving</NavButton>
                    <NavButton value='project'>Project</NavButton>
                </div>
            </MainHeader>
            <div>
                <MainContents>
                    <MainContentsComponent />
                </MainContents>
            </div>
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