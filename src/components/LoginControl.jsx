import React, { Component } from "react";
import styled from "styled-components";

export default class LoginControl extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((prevState) => ({
      isLogin: !prevState.isLogin,
    }));
  }

  render() {
    return (
      <>
        {this.state.isLogin ? (
          <Wrapper>
            <Button onClick={this.handleClick}>로그아웃</Button>
            <Txt>환영합니다!</Txt>
          </Wrapper>
        ) : (
          <Wrapper>
            <Button onClick={this.handleClick}>로그인</Button>
            <Txt>로그인 해주세요!</Txt>
          </Wrapper>
        )}
      </>
    );
  }
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const Button = styled.button`
  background-color: #fff;
  color: #143c70;
  margin: 0 10px;
  padding: 3px 10px;
  border: none;
  border-radius: 15px;
  cursor: pointer;
`;
const Txt = styled.div`
  font-size: 12px;
  color: #fff;
`;
