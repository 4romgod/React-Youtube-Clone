import React from "react";

import { Grid } from "@material-ui/core";

import VideoItem from "./VideoItem";



function VideoList(props){
    const {videos, onVideoSelect} = props;

    // Creates a single video item
    function createVidItem(video, id){
        return <VideoItem onVideoSelect={onVideoSelect} key={id} video={video}/>;
    }

    return (
        <Grid container spacing={3}>
            {videos.map(createVidItem)}
        </Grid>
    )
}
export default VideoList;