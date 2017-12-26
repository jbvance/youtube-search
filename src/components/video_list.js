import React from 'react';
import VideoListItem from './video_list_item'

const VideoList = (props) => {
    const {videos} = props;
    const videoItems = videos.map(video => {
        return <VideoListItem 
            key={video.etag} 
            video={video}  
            onVideoSelect={props.onVideoSelect}
        />
    });

    return (
        <ul className="col-md-4 list-group">
            {videoItems}
        </ul>
    );
}

export default VideoList;