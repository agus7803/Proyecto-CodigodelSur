import React from 'react';
import Paper from "@material-ui/core/Paper";
const VideoDetail = ({video}) => {
    if (!video) {
        return <div>Loading ...</div>;
    }

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

    return (
        <div>
                <Paper elevation={6} style={{ height: "70%" }}>
                    <iframe
                        frameBorder="0"
                        height="100%"
                        width="100%"
                        title="Video Player"
                        src={videoSrc}
                    />
                </Paper>
            <Paper elevation={6} style={{ padding: "15px" }}>
                <div><h4>{video.snippet.title}</h4></div>
                <div><h3>{video.snippet.description}</h3></div>
            </Paper>
        </div>



        /*<div>
            <Paper elevation={6} style={{height: "70%"}}>
                <iframe frameBorder="0"
                        height="100%"
                        width="100%"
                        src={videoSrc}></iframe>
            </Paper>
            <div  elevation={6} style={{ padding: "15px" }}>
                <div><h4>{video.snippet.title}</h4></div>
                <div><h3>{video.snippet.description}</h3></div>
            </div>
        </div>*/
    )
}

export default VideoDetail;

