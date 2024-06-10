import React from 'react';
import Main from '../components/section/Main';

const Home = () => {
    return (
        <Main title='Home page' description='Home page'>
            <section id='home' className='home-section'>
                <div className='content'>
                    <h1>Welcome to the Home Page</h1>
                    <p>Explore our amazing collection of videos and enjoy your time here.</p>
                    <button onClick={() => window.location.href = '/search/운동'}>운동 관련 영상 보기</button>
                </div>
            </section>
        </Main>
    );
};

export default Home;
