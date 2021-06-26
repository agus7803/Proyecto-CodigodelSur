import React from 'react';
import Paper from "@material-ui/core/Paper";


const VideoDetail = ({video}) => {
    if (!video) {
        return <div><h3>Cargando...</h3></div>;
    }
    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

    return (
        <div>
            <div>
                <Paper className={"videoDetail"} elevation={6} >
                    <iframe className={"iframe"}
                        title="Video Player"
                        src={videoSrc}
                    />
                </Paper>
            </div>
            <div className={"description"}>
                <Paper className={"title"}  elevation={6}>
                    <div>
                        <h4>{video.snippet.title}</h4>
                    </div>
                    <div>
                        <h3>{video.snippet.description}</h3>
                    </div>
                </Paper>
            </div>
        </div>
    )
}

export default VideoDetail;

