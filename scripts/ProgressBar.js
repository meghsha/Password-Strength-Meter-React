// 'ProgressBar' as a functional component which is initially set at zero progress value
// DONE 4: Styled ProgressBar component using styles written in this file (inline styling)
import React from 'react';

let progressBarContainerStyle = {
    width: '100%',
    marginTop: 20,
    textAlign: 'center'
}

let progressBarStyle = {
    width: '60%',
    minWidth: '45%'
}

let progressStatusStyle = {
    width: '40%',
    marginLeft: 10,
    color: '#cd5c5c'
}

const ProgressBar = function () {
    return (
        <div style={progressBarContainerStyle}>
            <progress id='progressBar' style={progressBarStyle} max='100' value='0'></progress>
            <span id='progressStatus' style={progressStatusStyle}>Very Weak</span>
        </div>
    );
}

export default ProgressBar;