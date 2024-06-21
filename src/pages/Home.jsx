import React from 'react';
import Main from '../components/section/Main';

const Home = () => {
    const navigateToSearch = (query) => {
        window.location.href = `/search/${query}`;
    };

    return (
        <Main title='홈 페이지' description='홈 페이지'>
            <section id='home' className='home-section'>
                <div className='content'>
                    <div className='hero'>
                        <h1>건강한 삶은 건강한 몸에서! GYM YOUTUBE와 같이해요!</h1>
                        <p>다양한 운동 영상들을 만나보세요!</p>
                        <button onClick={() => navigateToSearch('헬스 스트레칭')}>운동 전 스트레칭 영상 보기</button>
                    </div>
                    <div className='features'>
                        <div className='feature'>
                            <h2>최신 영상</h2>
                            <p>새로 추가된 영상들을 확인해보세요.</p>
                            <button onClick={() => navigateToSearch('최신')}>최신 영상 보기</button>
                        </div>
                        <div className='feature'>
                            <h2>인기 영상</h2>
                            <p>가장 인기 있고 높은 평점을 받은 영상을 시청하세요.</p>
                            <button onClick={() => navigateToSearch('인기')}>인기 영상 보기</button>
                        </div>
                        <div className='feature'>
                            <h2>카테고리</h2>
                            <p>요가, 유산소 운동, 근력 운동 등 다양한 카테고리의 영상을 찾아보세요.</p>
                            <button onClick={() => navigateToSearch('카테고리')}>카테고리 탐색</button>
                        </div>
                    </div>
                </div>
            </section>
        </Main>
    );
};

export default Home;
