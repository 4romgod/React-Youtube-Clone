
import React, { useState } from "react";

import { Grid } from '@material-ui/core';

import youtube from './api/youtube';


// import components
import { SearchBar, VideoList, VideoDetail } from "./components";

// class App extends React.Component{
//     render(){
//         return(
//             <h1>Youtube Clone App</h1>
//         )
//     }
// }
//require("dotenv").config();


function App() {
    const [vids, setVids] = useState([]);
    const [selectedVid, setSelectedVid] = useState(null);


    // handles a submit, and response from the searchBar
    async function handleSubmit(searchTerm) {
        const response = await youtube.get('search', {
            params: {
                part: "snippet",
                maxResults: 5,
                key: process.env.REACT_APP_API_KEY,
                q: searchTerm
            }
        });
        //console.log(response.data.items);

        setVids(response.data.items);
        setSelectedVid(response.data.items[0]);     //first item of the response
    }


    // handles a video selection
    function handleVideoSelect(video) {
        setSelectedVid(video);
    }


    return (
        <Grid justify="center" container style={{ padding: "10px 20px"}}>

            <Grid item xs={12}>

                <Grid container spacing={5} justify="center">

                    <Grid item xs={12} >
                        <SearchBar onFormSubmit={handleSubmit} />
                    </Grid>

                    <Grid item xs={12} md={7}>
                        <VideoDetail video={selectedVid} />
                    </Grid>

                    <Grid item xs={12} md={5}>
                        <VideoList videos={vids} onVideoSelect={handleVideoSelect} />
                    </Grid>

                </Grid>

            </Grid>

        </Grid>
    )
}
export default App;