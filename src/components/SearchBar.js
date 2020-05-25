import React from "react";

import { Paper, TextField } from "@material-ui/core";

class SearchBar extends React.Component {
    state = { searchTerm: "" }

    // Handles the state of the TextField
    handleChange = (event) => {
        //console.log(event.target.value);
        this.setState({ searchTerm: event.target.value });
    }


    // Handles the state of the form's onSubmit
    handleSubmit = (event) => {
        const { searchTerm } = this.state;      //we could use state.searchTerm;

        this.props.onFormSubmit(searchTerm);

        event.preventDefault();
    }


    render() {
        return (
            <Paper elevation={10} style={{ padding: '10px 20px' }}>
                <form onSubmit={this.handleSubmit}>
                    <TextField fullWidth label="Search..." onChange={this.handleChange} />
                </form>
            </Paper>
        )
    }
}
export default SearchBar;