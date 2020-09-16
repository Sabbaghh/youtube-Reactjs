import React, { Fragment, Component } from 'react';
import './video.css';

class Video extends Component {
    channel = () => {
        return (
            <li>
                <a
                    href={`https://www.youtube.com/channel/${this.props.ChannelID}`}
                    target="_blank" rel="noopener noreferrer">

                    <img
                        className="channel-pic" src={this.props.imgURL}
                        alt={this.props.channelName}>
                    </img>
                </a>

                <div className="video-description">
                    <h2> {this.props.channelName} </h2>
                </div>

            </li >
        )
    }

    video = () => {
        return (
            <li onClick={this.props.onClick}>
                <img src={this.props.imgURL}
                    alt={this.props.videoTitle}>
                </img>
                <div className="video-description">
                    <h2> {this.props.videoTitle} </h2>
                    <h5> {this.props.channelName} </h5>
                    <h5> {this.props.publishDate} </h5>
                </div>
            </li>
        )
    }
    render() {
        return (
            <Fragment>
                {this.props.kind === "youtube#video" ? this.video() : this.channel()}
            </Fragment>

        )
    }

}

export default Video; 