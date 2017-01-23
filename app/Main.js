import React from 'react';
import VideosList from './videosList'
import API from './api.js';

import Video from './video';
import injectTapEventPlugin from 'react-tap-event-plugin';



class Main extends React.Component {
    render(){
        return <main> <VideosList />  </main>
    }
}


export default Main;