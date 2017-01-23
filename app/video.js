import React from 'react';
import VideoList from './videosList'

import API from './api';

import YouTube from 'react-youtube'

class Video extends React.Component{
 
    render() {
        return (
            <div>
                <img src={this.props.videos.snippet}/>
                <h2>title 1111111111111111111111111</h2>
                <p>Description</p>
            </div>

        )
    }

}

export default  Video;