import React from "react";
import SearchAppBar from "./SearchAppBar";
import youtube from "../API/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import Grid from "@material-ui/core/Grid";


class App extends React.Component{
    state = {
        videoInfo:[],
        videoSelected:null
    };
    handleSubmit = async (searchKey) => {
        const response = await youtube.get('/search',{
            params:{
                q: searchKey
            }
        })
        this.setState({
            videoInfo:response.data.items,
            videoSelected: response.data.items[0]
        })
        console.log(this.state)
    };
    handleVideoSelect = (videos) =>{
        this.setState({videoSelected: videos})
    };

    render(){
        return (
            <Grid style={{ justifyContent: "center" }} container spacing={10}>
                <Grid item xs={11}>
                    <Grid container spacing={10}>
                        <Grid item xs={12}>
                            <SearchAppBar onSearch={this.handleSubmit} />
                        </Grid>
                        <Grid item xs={8}>
                            <VideoDetail video={this.state.videoSelected}/>
                        </Grid>
                        <Grid item xs={4}>
                            <VideoList handleVideoSelect={this.handleVideoSelect} videos={this.state.videoInfo}/>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        /*<div style={{ justifyContent: "center" }} container spacing={10}>
            <SearchAppBar  onSearch={this.handleSubmit}/>
            <div container spacing={10}>
                <div item xs={12}>
                    <div item xs={8}>
                        <VideoDetail video={this.state.videoSelected}/>
                    </div>
                    <div item xs={4}>
                        <VideoList handleVideoSelect={this.handleVideoSelect} videos={this.state.videoInfo}/>
                    </div>
                </div>
            </div>
        </div>*/
    );
    }

}

export default App;
