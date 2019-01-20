import React, { FunctionComponent } from "react";
import { Header } from "../../../style/emotion";

const ProfileMol: FunctionComponent<{ name: string; code: string }> = props => {
  return (
    <div
      style={{
        backgroundColor: "white",
        width: 250,
        height: 130,
        margin: 20
      }}
    >
      <Header style={{ fontSize: 20 }}>{props.name}</Header>
      <div style={{ color: "gray" }}>{props.code}</div>
      <div
        style={{
          display: "flex",
          padding: 20,
          paddingTop: 0,
          justifyContent: "space-between"
        }}
      >
        <p>
          tweet
          <div style={{ color: "#2F9DE0" }}>{2}</div>
        </p>
        <p>
          follow
          <div style={{ color: "#2F9DE0" }}>{2}</div>
        </p>
        <p>
          follower
          <div style={{ color: "#2F9DE0" }}>{2}</div>
        </p>
      </div>
    </div>
  );
};

export default ProfileMol;
