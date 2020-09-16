import React, { Fragment } from 'react';
import './MainVideo.css'

const MainVideo = (props) => {
    const Video = () => {
        return (
            <div className="first-video">
                <iframe
                    width="100%" height="100%" src={`https://www.youtube.com/embed/${props.VideoURL}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;picture-in-picture"
                    allowFullScreen
                    title={props.title}></iframe>
            </div>
        )
    }

    const NoVideo = () => {
        return <div className="no-video"> SEARCH FOR NEW VIDEO</div>
    }

    return (
        <Fragment>
            {props.VideoURL === '' ? NoVideo() : Video()}
        </Fragment>
    )
}

export default MainVideo;