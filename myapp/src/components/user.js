import React from "react";
import axios from "axios";
import Followers from "./followers";

class User extends React.Component {
  state = {
    followerData: [],
  };
  componentDidMount() {
    axios
      .get("https://api.github.com/users/CptHappyHands/followers")
      .then((res) => {
        this.setState({
          ...this.state,
          followerData: res.data,
        });
      });
  }

  render() {
    // console.log(this.props)
    const followerData = this.state.followerData;
    // console.log(followerData);
    return (
      <div>
        {followerData ? (
          followerData.map((followers) => (
            <Followers id={followers.id} login={followers.login} />
          ))
        ) : (
          <div>Loading</div>
        )}
      </div>
    );
  }
}

export default User;
