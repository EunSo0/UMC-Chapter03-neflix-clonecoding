import React from "react";
import adImage from "../image/adImage.svg";

export default function AdPage({ isShow }) {
  if (!isShow) {
    return null;
  }
  return (
    <div>
      <img src={adImage} alt="광고 이미지" />
    </div>
  );
}
