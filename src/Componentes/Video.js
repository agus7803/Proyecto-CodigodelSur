import React from 'react';
import {Paper, Grid} from "@material-ui/core";


const Video = ({video, handleVideoSelect}) => {
    return (
        <Grid item xs={12} onClick={() => handleVideoSelect(video)}>
            <Paper style={{ display: "flex", alignItems: "center", cursor: "pointer" }} >
                <img style={{ marginRight: "20px" }} alt={video.snippet.description} src={video.snippet.thumbnails.medium.url} />
                <div>
                    <h2>{video.snippet.title}</h2>
                </div>
            </Paper>
        </Grid>




        /*<li className={"list-group-item"} onClick={() => handleVideoSelect(video)}>
            <Paper elevation={3} >
                <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.description}/>
                <div>
                    <div>{video.snippet.title}</div>
                </div>
            </Paper>
        </li>*/
    )
};
export default Video;