import React from 'react';
import {Paper, Grid} from "@material-ui/core";


const Video = ({video, handleVideoSelect}) => {
    return (
        <Grid item xs={12}  onClick={() => handleVideoSelect(video)}>
            <Paper className={"video"} item xs={8} >
                <img className={"img"}  alt={video.snippet.description} src={video.snippet.thumbnails.medium.url} />
                <div>
                    <h4>{video.snippet.title}</h4>
                </div>
            </Paper>
        </Grid>
    )
};
export default Video;