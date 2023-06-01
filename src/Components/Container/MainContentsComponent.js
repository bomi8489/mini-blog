import React, { forwardRef } from 'react';
import {
    AboutContents,
    AboutMe,
    ArchivingComponent,
    Banner,
    GitChart,
    ProfileComponent,
    ProjectComponent,
    StackComponent
} from '../Presenter/MainPresenter';
import {
    BsFillPersonFill,
    BsFillCalendarFill,
    BsFillPencilFill,
} from 'react-icons/bs';
import {FaMapMarkerAlt} from 'react-icons/fa';
import {MdOutlineEmail} from 'react-icons/md';
import {AiOutlineHtml5} from 'react-icons/ai';
import {IoLogoCss3} from 'react-icons/io';
import {SiReact, SiTypescript, SiRedux} from 'react-icons/si';
import {DiJavascript} from 'react-icons/di';
import insta from './images/insta.png';
import movieApp from './images/movie-app.png';
import todolist from './images/todolist.png';

const MainContentsComponent = forwardRef((_, ref) => {

    return (
        <div ref={ref}>
            <Banner>
                <div>
                    <ProfileComponent>
                        <h2>Kwon Ki Beom</h2>
                        <div>끊임없이 생각하고</div>
                        <div>새로운 걸 배우는 것을 두려워 하지않는</div>
                        <div>프론트엔드 개발자입니다.</div>
                    </ProfileComponent>
                </div>
                <GitChart src='https://ghchart.rshah.org/219138/bomi8489' alt='gitchart'/>
            </Banner>

            <AboutMe>
                <AboutContents>
                    <BsFillPersonFill/>
                    <div>
                        <div>이름</div>
                        <div>권기범</div>
                    </div>
                </AboutContents>
                <AboutContents>
                    <BsFillCalendarFill/>
                    <div>
                        <div>생년월일</div>
                        <div>97.01.02</div>
                    </div>
                </AboutContents>
                <AboutContents>
                    <FaMapMarkerAlt/>
                    <div>
                        <div>주소</div>
                        <div>대구광역시 달서구</div>
                    </div>
                </AboutContents>
                <AboutContents>
                    <MdOutlineEmail/>
                    <div>
                        <div>이메일</div>
                        <div>krshlee22@naver.com</div>
                    </div>
                </AboutContents>
                <AboutContents>
                    <BsFillPencilFill/>
                    <div>
                        <div>학력</div>
                        <div>계명대학교<br />(컴퓨터공학부)</div>
                    </div>
                </AboutContents>
            </AboutMe>

            <StackComponent>
                <div>
                    <div>FrontEnd</div>
                    <div>
                        <div>
                            <div>HTML</div>
                            <AiOutlineHtml5 />
                        </div>
                        <div>
                            <div>CSS</div>
                            <IoLogoCss3 />
                        </div>
                        <div>
                            <div>JS</div>
                            <DiJavascript />
                        </div>
                        <div>
                            <div>React</div>
                            <SiReact />
                        </div>
                        <div>
                            <div>TS</div>
                            <SiTypescript />
                        </div>
                        <div>
                            <div>Redux</div>
                            <SiRedux />
                        </div>
                    </div>
                </div>
            </StackComponent>

            <ArchivingComponent>
                <div>archiving</div>
            </ArchivingComponent>

            <hr />
            <ProjectComponent>
                <div>Project</div>
                <div>
                    <div>
                        <div>To Do List</div>
                        <div>
                            <img src={todolist} alt='todolist'/>
                        </div>
                    </div>
                    <div>
                        <div>web 개발 입문시 javascript로 한번씩 구현 해보는 To do list를 react, typescript와 redux를 이용해서 개발해보았습니다. 개발을 진행하면서 redux를 사용했을 때 얻을 수 있는 편리함과 상태관리를 통해 짧고 가독성 좋은 코드를 짤 수 있는 경험을 했습니다.</div>
                        <hr />
                        <div>
                            <div>GitHub: </div>
                            <a href='https://github.com/bomi8489/todolist-ts' target='_blank' rel="noreferrer">https://github.com/bomi8489/todolist-ts</a>
                        </div>
                        <div>
                            <div>Stack: </div>
                            <div>React, Typescript, React-redux, Redux-toolkit</div>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <div>Movie App</div>
                        <div>
                            <img src={movieApp} alt='movie-app'/>
                        </div>
                    </div>
                    <div>
                        <div>React환경에서 Javascript를 사용하여 openAPI에서 비동기적으로 데이터를 불러와 화면에 보여주는 경험을 해보았습니다.</div>
                        <hr />
                        <div>
                            <div>GitHub: </div>
                            <a href='https://github.com/bomi8489/movie-app' target='_blank' rel="noreferrer">https://github.com/bomi8489/movie-app</a>
                        </div>
                        <div>
                            <div>Stack: </div>
                            <div>React, Javascript</div>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <div>Instagram Clone</div>
                        <div>
                            <img src={insta} alt='insta'/>
                        </div>
                    </div>
                    <div>
                        <div>React환경에서 Typescript를 사용해 인스타그램 클론코딩을 진행해보았습니다. 구현하면서 Typescript를 익히는 동시에 여러 hook들의 사용법을 익힐 수 있었습니다.</div>
                        <hr />
                        <div>
                            <div>GitHub: </div>
                            <a href='https://github.com/bomi8489/insta-clone' target='_blank' rel="noreferrer">https://github.com/bomi8489/insta-clone</a>
                        </div>
                        <div>
                            <div>Stack: </div>
                            <div>React, Typescript</div>
                        </div>
                    </div>
                </div>
            </ProjectComponent>
        </div>
    )
})

export default MainContentsComponent
