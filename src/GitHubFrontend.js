import React from 'react';
import GitHubProfile from './GitHubProfile';
import ProfilePicker from "./ProfilePicker";
import axios from "axios";

class GitHubFrontend extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            user: ''
        };
        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit() {
        const username = this.state.username;
        axios.get(`https://api.github.com/users/${username}`)
            .then(res => {
                const user = res.data;
                this.setState({user: user})
            }).catch(err =>{
            console.log(err);
        });
    }

    handleOnChange(event) {
        this.setState({
            username: event.target.value
        })
    }

    render() {
        return (
            <div>
                <ProfilePicker handleSubmit={this.handleSubmit} onUsernameInputChange={this.handleOnChange}/>
                <GitHubProfile user={this.state.user}/>
            </div>
        );
    }
}

export default GitHubFrontend;