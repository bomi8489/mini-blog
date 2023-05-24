import React from 'react';
import { 
    MainContainer, 
    MainContents, 
    MainFooter, 
    MainHeader,
} from '../Presenter/MainPresenter';
import {AiFillGithub} from 'react-icons/ai';
import {SiNaver} from 'react-icons/si';
import tistory from './images/tistory.svg';

const Main = () => {
    return (
        <MainContainer>
            <MainHeader>Bomi's</MainHeader>
            <div>
                <MainContents>main</MainContents>
                <MainFooter>
                    <div>
                        <a href='https://github.com/bomi8489' target='_blank' rel="noreferrer">Github <AiFillGithub size={36}/></a>
                    </div>
                    <div>
                        <a href='https://37degree.tistory.com/' target='_blank' rel="noreferrer">Develop Blog <img src={tistory} alt='tistory'/></a>
                    </div>
                    <div>
                        <a href='https://blog.naver.com/PostList.naver?blogId=b____omi' target='_blank' rel="noreferrer">Daily Blog <SiNaver size={25} color='#5AC467'/></a>
                    </div>
                </MainFooter>
            </div>
        </MainContainer>
    )
}

export default Main;