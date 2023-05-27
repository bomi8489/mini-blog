import React, { useState } from 'react';
import { GitChart, NavButton, NavigationAbout, ProfileComponent } from '../Presenter/MainPresenter';

const NavigationComponent = () => {
    const [check, setCheck] = useState([true, false]);

    const onNavClick = (e) => {
        if(e.target.attributes[0].value === 'about') {
            setCheck([true, false]);
        }
        else if(e.target.attributes[0].value === 'project') {
            setCheck([false, true]);
        }
    }

    return (
        <div>
            <div>
                <NavButton onClick={onNavClick} value='about'>About</NavButton>
                <NavButton onClick={onNavClick} value='project'>Project</NavButton>
            </div>

            {check[0] &&
                <NavigationAbout>
                    <div>
                        <div>character</div>
                        <ProfileComponent>
                            <h2>Kwon Ki Beom</h2>
                            <div>ㄹㅇㄴㅁㄹㅇㄴㅁㄹㅇㄴㅁㄹ</div>
                            <div>fdsafdsfasdfewafdsfa</div>
                            <div>zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz</div>
                        </ProfileComponent>
                    </div>
                    <GitChart src='https://ghchart.rshah.org/219138/bomi8489' alt='gitchart'/>
                </NavigationAbout>
            }
            {check[1] &&
                <>
                </>
            }
        </div>
    )
}

export default NavigationComponent
