import React from 'react';
import Grid from "@material-ui/core/Grid";
import Video from './Video';


const VideoList = ({videos, handleVideoSelect}) => {
    const renderVideo = videos.map((video) => {
        return <Video key={video.id.videoId} video={video} handleVideoSelect={handleVideoSelect}/>
    });
    return <Grid container spacing={10}>{renderVideo}</Grid>
};
export default VideoList;