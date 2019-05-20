import React from 'react';

class GitHubProfile extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const profileSet = (!this.props.user);
        if (profileSet) {
            return (
                <div/>
            );
        } else {
            return (
                <div>Hello {this.props.user.name}!</div>
            );
        }
    }

}

export default GitHubProfile;