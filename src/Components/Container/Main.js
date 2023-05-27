import React from 'react';
import {
    MainContainer, 
    MainContents, 
    MainFooter, 
    MainFooterBox, 
    MainHeader,
} from '../Presenter/MainPresenter';
import {AiFillGithub} from 'react-icons/ai';
import {SiNaver} from 'react-icons/si';
import tistory from './images/tistory.svg';
import NavigationComponent from './NavigationComponent';

const Main = () => {
    return (
        <MainContainer>
            <MainHeader>Bomi's</MainHeader>
            <div>
                <MainContents>
                    <NavigationComponent />
                </MainContents>
            </div>
            <MainFooter>
                <MainFooterBox>
                    <div>
                        <a href='https://github.com/bomi8489' target='_blank' rel="noreferrer">Github <AiFillGithub size={36}/></a>
                    </div>
                    <div>
                        <a href='https://37degree.tistory.com/' target='_blank' rel="noreferrer">Develop Blog <img src={tistory} alt='tistory'/></a>
                    </div>
                    <div>
                        <a href='https://blog.naver.com/PostList.naver?blogId=b____omi' target='_blank' rel="noreferrer">Daily Blog <SiNaver size={22} color='#5AC467'/></a>
                    </div>
                </MainFooterBox>
            </MainFooter>
        </MainContainer>
    )
}

export default Main;