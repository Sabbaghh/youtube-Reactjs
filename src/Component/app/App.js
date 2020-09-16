import React, { Component } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import VideoList from '../video-list/videos/videolist'
import MainVideo from '../MainVideo/MainVideo'
import YoutubeApi from '../../Api/YoutubeApi';
import './app.css';




class App extends Component {
    state = {
        videos: [],
        currentVideo:'',
        currentIndex : 0
    }




    searchHandler = async (search) => {
        const respone = await YoutubeApi.get('/search', {
            params: {
                q: search
            }
        })
        this.setState({ videos: respone.data.items });
    }

    setCurrentVideo = (currentVideo,currentIndex)=> { 
        this.setState({currentVideo,currentIndex});
    }

    render() {
        return (
            <div className="AppConatiner">
                <SearchBar searchHandler={this.searchHandler} />

                <section className="videos-Sections">
                    <MainVideo VideoURL = {this.state.currentVideo} title={this.state.currentIndex}/>
                    <VideoList videos={this.state.videos} setCurrentVideo={this.setCurrentVideo}  />
                </section>
            </div>
        )
    }
}

export default App;