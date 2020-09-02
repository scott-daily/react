import React from 'react';
import Spinner from './Spinner';


const VideoDetail = ({video}) => {
    if (!video) {
        return <Spinner message='Loading videos...'/>
    }

    const videoSource = `https://www.youtube.com/embed/${video.id.videoId}`

    return (
        <div>
            <div className="ui embed">
                <iframe src={videoSource} title={video.snippet.title} allowFullScreen />
            </div>
            <div className="ui segment">
                <h4 className="ui header">{video.snippet.title}</h4>
                <p>{video.snippet.description}</p>
            </div>
        </div>
    )
}

export default VideoDetail;