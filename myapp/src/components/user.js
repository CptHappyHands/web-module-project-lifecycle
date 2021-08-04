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
    return (
      <div>
        {this.state.followerData.map(
          (followers) => console.log(followers)
          //   <h2>{followers}</h2>
        )}
      </div>
    );
  }
}

export default User;
