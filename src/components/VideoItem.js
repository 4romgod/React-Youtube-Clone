import React from "react";

import { Grid, Paper, Typography } from "@material-ui/core";

function VideoItem(props) {
    const { video, onVideoSelect } = props;

    // When item clicked, call prop onVideoSelect
    function handleClick() {
        onVideoSelect(video);
    }

    return (
        <Grid item xs={12}>

            <Paper elevation={6} style={{ display: "flex", alignItems: "center", cursor: "pointer" }} onClick={handleClick}>
                <img style={{ marginRight: "10px", width: '30%'}} alt="thumbnail" src={video.snippet.thumbnails.medium.url} />
                
                <Typography variant="subtitle1">
                    <b>{video.snippet.title}</b>
                </Typography>
            </Paper>

        </Grid>
    )
}

export default VideoItem;