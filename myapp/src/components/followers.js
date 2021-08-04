import React from 'react';
import axios from 'axios';

class Followers extends React.Component {
state = {
    followerData: []
}

    componentDidMount() {
        axios.get('https://api.github.com/users/CptHappyHands/followers')
        .then(res => {
            this.setState({
                ...this.state,
                followerData:[
                    res.data.login,
                    res.data.html_url,
                ]

            })
        })
    }

    render() {
        
        const { followers } = this.props;

        return(
            <div key={followers.id}>
                {
                    this.state.followerData
                }
            </div>
        )
    }
}

export default Followers;