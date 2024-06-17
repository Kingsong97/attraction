import React from 'react';
import Main from '../components/section/Main';

const Home = () => {
    return (
        <Main title='Home page' description='Home page'>
            <section id='home' className='home-section'>
                <div className='content'>
                    <h1>홈페이지에 오신 것을 환영합니다</h1>
                    <p>다양한 헬스 정보를 시청하고 즐거운 시간을 보내세요.</p>
                    <button onClick={() => window.location.href = '/search/운동'}>운동 관련 영상 보기</button>
                </div>
            </section>
        </Main>
    );
};

export default Home;
