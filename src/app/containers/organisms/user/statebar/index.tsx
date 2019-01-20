import React, { FunctionComponent } from "react";
import { Dispatch } from "redux";
import { SpaceRight, Button } from "../../../../style/emotion";
import { ReduxState } from "../../../../modules/createStore";

const UserStateOrg: FunctionComponent<{
  dispatch: Dispatch;
  reduxState: ReduxState;
  name: string;
  isFollow: boolean;
  tweetNum: number;
}> = ({ dispatch, reduxState, name, isFollow, tweetNum }) => {
  return (
    <div
      style={{
        background: "white",
        color: "#66747E",
        padding: 10,
        display: "flex",
        width: "100%"
      }}
    >
      <SpaceRight style={{ fontSize: 30 }}>{name}</SpaceRight>
      <SpaceRight>
        tweet<div style={{ color: "#259FF2" }}>{tweetNum}</div>
      </SpaceRight>
      <SpaceRight>
        follow<div style={{ color: "#259FF2" }}>{2}</div>
      </SpaceRight>
      <SpaceRight>
        follower<div style={{ color: "#259FF2" }}>{2}</div>
      </SpaceRight>
      <Button
        background={isFollow ? "#2C9DF2" : "#66737D"}
        style={{ marginLeft: "auto", marginRight: 50, marginTop: 10 }}
      >
        follow
      </Button>
    </div>
  );
};

export default UserStateOrg;
