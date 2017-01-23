import React from 'react';
import API from './api';
import Video from './video'

import YouTube from 'react-youtube'

class VideosList extends React.Component{
    constructor(){
        super();
        this.state = {
            videos: []
        }
    }

    componentDidMount(){
        API.getYoutubeVideos().then( (data) => {
            alert(data);
            console.log(this)
            this.setState({
                videos: data,
            })
        });
    }
    render() {
        return (
        <div>
            {
                this.state.videos.map((video) => {
                    return <Video videos={video} />

                })
            }
        </div>
        )
    }
}

export default  VideosList