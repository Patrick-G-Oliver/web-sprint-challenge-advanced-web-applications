import React from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

// username = Lambda School, password = i<3Lambd4

class Login extends React.Component {
  state = {
    credentials: {
      username: "",
      password: ""
    }
  };

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials, 
        [e.target.name]: e.target.value
      }
    });
  };

  // make a post request to retrieve a token from the api
  login = e => {
    e.preventDefault();
    axiosWithAuth()
      .post("http://localhost:5000/api/login", this.state.credentials)
      .then(res => {
        console.log("loggin in", res)
        localStorage.setItem("token", res.data.payload);
         // when you have handled the token, navigate to the BubblePage route
         this.props.history.push("/protected");
      })
      .catch(err => console.log({ err }));
  }

  render() {
    return (
      <div> 
        <form onSubmit={this.login}>
          <input 
            type="text"
            name="username"
            value={this.state.credentials.username}
            onChange={this.handleChange}
          />
          <input 
            type="password"
            name="password"
            value={this.state.credentials.password}
            onChange={this.handleChange}
          />
          <button>Log In</button>
        </form>
      </div>
    );
  };
};

export default Login;

/* 

const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <p>Build a login page here</p>
    </>
  );
};

*/
