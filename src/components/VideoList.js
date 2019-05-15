import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({onList, onVideoSelect}) => {
    const videos = onList.map((video) => {
        return <VideoItem key={video.id.videoId} onVideoSelect={onVideoSelect} video={video} />;
    });

    return (
        <div className="ui relaxed divided list">{videos}</div>
    );
}

export default VideoList;