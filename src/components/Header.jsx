import React from "react";
import * as H from "../styles/Header.style.js";
import { Link } from "react-router-dom";
import LoginButton from "./LoginButton";

export default function Header() {
  return (
    <H.Wrapper>
      <H.ContentWrapper>
        <Link to="/">
          <H.Logo src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg" />
        </Link>
        <H.MenuList>
          <H.Menu>
            <Link to="/movie">영화</Link>
          </H.Menu>
          <H.Menu>
            <Link to="/tv">TV 프로그램</Link>
          </H.Menu>
          <H.Menu>
            <Link to="/person">인물</Link>
          </H.Menu>
          <LoginButton />
        </H.MenuList>
      </H.ContentWrapper>
    </H.Wrapper>
  );
}
