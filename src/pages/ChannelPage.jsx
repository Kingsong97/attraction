import React, { useEffect, useState } from 'react'
import Main from '../components/section/Main'
import { useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';

import { CiBadgeDollar } from "react-icons/ci";
import { CiMedal } from "react-icons/ci";
import { CiRead } from "react-icons/ci";

const ChannelPage = () => {
    const { channelID } = useParams();
    const [channelDetail, setChannelDetail] = useState();
    const [channelVideo, setChannelVideo] = useState([]);
    const [loading, setLoading] = useState(true);
    const [nextPageToken, setNextPageToken] = useState(null);

    useEffect(() => {
        const fetchResults = async () => {
            try {
                const detail = await fetch(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet,brandingSettings&id=${channelID}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`)
                const detailData = await detail.json();
                setChannelDetail(detailData.items[0]);
                // console.log(detailData);

                const video = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelID}&order=date&maxResults=48&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`)
                const videoData = await video.json();
                setChannelVideo(videoData.items);
                setNextPageToken(videoData.nextPageToken);
                // console.log(videoData)

            } catch (error) {
                console.log('데이터를 가져오지 못했습니다.', error)
            } finally {
                setLoading(false);
            }
        }
        fetchResults();
    }, [channelID]);

    return (
        <Main
            title="유튜버 채널"
            description="유튜버 채널 페이지입니다."
        >
            <section id='channelPage'>
                {channelDetail && (
                    <div className='channel__inner'>
                        <div className="channel__header" style={{ backgroundImage: `url(${channelDetail.brandingSettings.image.bannerExternalUrl})` }}>
                            <div className="circle">
                                <img src={channelDetail.snippet.thumbnails.high.url} alt={channelDetail.snippet.title} />
                            </div>
                        </div>
                        <div className="channel__info">
                            <h3 className='title'>{channelDetail.snippet.title}</h3>
                            <p className='desc'>{channelDetail.snippet.description}</p>
                            <div className='info'>
                                {/* <span><CiBadgeDollar />{channelDetail.statistics.subscriberCount}</span>
                                <span><CiMedal />{channelDetail.statistics.videoCount}</span>
                                <span><CiRead />{channelDetail.statistics.viewCount}</span> */}
                            </div>
                        </div>
                        <div className="chvideo">
                            <div className="chvideo__list">
                                {channelVideo.map((video) => (
                                    <div className="chvideo__item" key={video.id.videoId}>
                                        <ReactPlayer
                                            url={`https://www.youtube.com/watch?v=${video.id.videoId}`}
                                            width='100%'
                                            height='100%'
                                        />
                                        <h3>{video.snippet.title}</h3>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </section>
        </Main>
    )
}

export default ChannelPage