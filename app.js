import React from 'react';
import ReactDOM from 'react-dom';
import Main from './app/Main';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Video from './app/video';
import injectTapEventPlugin from 'react-tap-event-plugin';

ReactDOM.render (
    <MuiThemeProvider>
    <Main />
    </MuiThemeProvider>,
    document.getElementById('root')
    
);

