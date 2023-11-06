import React, { useState, useCallback } from "react";
import * as L from "../styles/Login.style.js";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailMsg, setEmailMsg] = useState("");
  const [pwdMsg, setPwdMsg] = useState("");

  const validateEmail = (email) => {
    return email
      .toLowerCase()
      .match(
        /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/,
      );
  };

  const validatePwd = (password) => {
    return password
      .toLowerCase()
      .match(/^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/);
  };

  const onChangeEmail = useCallback((e) => {
    const currEmail = e.target.value;
    setEmail(currEmail);

    if (!validateEmail(currEmail)) {
      setEmailMsg("이메일 형식이 올바르지 않습니다.");
    } else {
      setEmailMsg("");
    }
  });

  const onChangePwd = useCallback((e) => {
    const currPwd = e.target.value;
    setPassword(currPwd);

    if (!validatePwd(currPwd)) {
      setPwdMsg("영문, 숫자, 특수기호 조합으로 10자리 이상 입력해주세요.");
    } else {
      setPwdMsg("");
    }
  }, []);

  const isEmailValid = validateEmail(email);
  const isPwdValid = validatePwd(password);

  const isAllValid = isEmailValid && isPwdValid;

  return (
    <L.Wrapper>
      <L.Title>로그인</L.Title>
      <L.FormWrapper>
        <L.InputWrapper>
          <L.Label>이메일</L.Label>
          <L.InputArea
            type="email"
            placeholder="이메일"
            value={email}
            onChange={(e) => onChangeEmail(e)}
          ></L.InputArea>
          <L.Error>{emailMsg}</L.Error>
        </L.InputWrapper>
        <L.InputWrapper>
          <L.Label>비밀번호</L.Label>
          <L.InputArea
            type="password"
            placeholder="영문, 숫자, 특수문자 포함 8자 이상"
            value={password}
            onChange={(e) => onChangePwd(e)}
          ></L.InputArea>
          <L.Error>{pwdMsg}</L.Error>
        </L.InputWrapper>
        <L.Button type="submit" disabled={!isAllValid}>
          확인
        </L.Button>
      </L.FormWrapper>
    </L.Wrapper>
  );
}
