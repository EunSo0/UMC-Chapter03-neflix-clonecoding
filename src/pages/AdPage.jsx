import React, { Component } from "react";
import Ad from "../components/Ad";

export default class AdPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: true,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((prevState) => ({
      isShow: !prevState.isShow,
    }));
  }

  render() {
    return (
      <>
        <Ad isShow={this.state.isShow} />
        <button onClick={this.handleClick}>
          {this.state.isShow ? "광고 안보기" : "광고 보기"}
        </button>
      </>
    );
  }
}
