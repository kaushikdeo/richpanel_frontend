import React, { Component } from "react";
import Header from "./Header";
import PropTypes from "prop-types";
import { compose } from 'react-apollo';
import { graphql} from '@apollo/react-hoc';

import { GREETINGS } from "../graphql/appQueries";
import Dashboard from "./DashboardNew/Dashboard";
import AppNavigation from './DashboardNew/AppNavigation';
import SearchBar from "./DashboardNew/SearchBar";
import OverView from "./DashboardNew/OverView";
import VerticalNav from "./DashboardNew/VerticalNav";

class HomePage extends Component {
  static propTypes = {
    user: PropTypes.shape({
      name: PropTypes.string,
      profileImageUrl: PropTypes.string,
      twitterId: PropTypes.string,
      screenName: PropTypes.string,
      _id: PropTypes.string
    })
  };

  state = {
    user: {},
    error: null,
    authenticated: false
  };

  componentDidMount() {
    // Fetch does not send cookies. So you should add credentials: 'include'
    fetch("http://localhost:4000/auth/login/success", {
      method: "GET",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true
      }
    })
      .then(response => {
        if (response.status === 200) return response.json();
        throw new Error("failed to authenticate user");
      })
      .then(responseJson => {
        //subscribe to webhook
        localStorage.setItem('authToken', responseJson.user.token);
        localStorage.setItem('authTokenSecret', responseJson.user.tokenSecret);
        localStorage.setItem('authTokenSecret', responseJson.user.tokenSecret);
        this.setState({
          authenticated: true,
          user: responseJson.user
        });
      })
      .catch(error => {
        this.setState({
          authenticated: false,
          error: "Failed to authenticate user"
        });
      });
  }

  handleNotAuthenticated = () => {
    this.setState({ authenticated: false });
  };

  render() {
    const {data} = this.props;
    const { authenticated } = this.state;
    return (
      <div>
        <div>
          {!authenticated ? (
            <Header
            authenticated={authenticated}
            handleNotAuthenticated={this.handleNotAuthenticated}
          />
          ) : (
            <Dashboard />
          )}
        </div>
      </div>
    );
  }
}

export default compose(
  graphql(GREETINGS),
)(HomePage);