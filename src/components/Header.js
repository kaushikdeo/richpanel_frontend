import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import React, { Component } from "react";
import {Button } from 'react-bootstrap';

export default class Header extends Component {
  static propTypes = {
    authenticated: PropTypes.bool.isRequired
  };

  handleSignInClick = () => {
    window.open("http://localhost:4000/auth/twitter", "_self");
  };

  render() {
    return(
      <>
      <div className="background-6"></div>
      <div>
        <div className="LoginFT mds-3">
          <img id="Avimg" className="Avatar mds-2" src="https://pbs.twimg.com/profile_images/697353822163898368/nOFnWPhe.png" />
          <div className="Content">
            <Button onClick={this.handleSignInClick} style={{flex: 1, width: '100%', alignItems: 'center', marginTop: 100}} as="input" value="Login With Twitter" />{' '}
          </div>
        </div>
      </div>
      <div className="Subtitle">
        <p style={{marginBottom:7}}>Kaushik M. Deo</p>
      </div>

      <div id="fp-nmp" className="NMP nv mds-2">
        <p className="nmpt">This is not my problem.</p>
        <a id="fp-npm-btn" className="btn fnb ">Ok :(</a>
      </div>
      </>
    )
  }
}