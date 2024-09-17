import React from "react";
import axios from "axios";
import "./App.css";
import User from "./components/user";

class App extends React.Component {
  state = {
    userData: [],
    followerData: [],
  };

  componentDidMount() {
    axios
      .get("https://api.github.com/users/CptHappyHands")
      .then((res) => {
        // console.log(res);
        this.setState({
          ...this.state,
          userData: [res.data.login, res.data.html_url],
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <h1>Git Hub User Cards</h1>
        <form>
          <input />
          <button>Click here</button>
        </form>
        <div id="userInfo">
          {/* {console.log(this.state)} */}
          {this.state !== null ? (
            <div>{this.state.userData}</div>
          ) : (
            <div>Loading</div>
          )}
        </div>
        <div>
          <User />
        </div>
      </div>
    );
  }
}

export default App;
