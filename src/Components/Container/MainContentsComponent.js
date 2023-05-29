import React from 'react';
import { 
    About,
    GitChart, 
    NavButton, 
    ProfileComponent 
} from '../Presenter/MainPresenter';

const MainContentsComponent = () => {

    return (
        <div>
            <div>
                <NavButton value='about'>About</NavButton>
                <NavButton value='project'>Project</NavButton>
            </div>

            <About>
                <div>
                    <ProfileComponent>
                        <h2>Kwon Ki Beom</h2>
                        <div>끊임없이 생각하고</div>
                        <div>새로운 걸 배우는 것을 두려워 하지않는</div>
                        <div>프론트엔드 개발자입니다.</div>
                    </ProfileComponent>
                </div>
                <GitChart src='https://ghchart.rshah.org/219138/bomi8489' alt='gitchart'/>
            </About>
        </div>
    )
}

export default MainContentsComponent
