import React from 'react';
import Video from '../video/video';
import './videolist.css';

const Videos = (props) => {

    const video = props.videos.map((el, index) => {
        return <Video
            key={index}
            index={index}
            VideoURL={el.id.videoId}
            kind={el.id.kind}
            imgURL={el.snippet.thumbnails.high.url}
            channelName={el.snippet.channelTitle}
            ChannelID={el.snippet.channelId}
            publishDate={el.snippet.publishedAt}
            videoTitle={el.snippet.title}
            onClick={() => props.setCurrentVideo(el.id.videoId, index)}
        />
    })

    return (
        <nav className="video-list">
            <ul>
                {video}
            </ul>
        </nav>
    )

}

export default Videos;