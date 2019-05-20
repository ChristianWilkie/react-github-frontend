import React from 'react';
import axios from 'axios';

class ProfilePicker extends React.Component {

    render() {
        return (
            <div>
                <label>
                    GitHub profile to display:
                    <input type="text" onChange={this.props.onUsernameInputChange}/>
                </label>
                <button type="submit" value="Submit" onClick={this.props.handleSubmit}>Get Profile</button>
            </div>
        )
    }

}

export default ProfilePicker;