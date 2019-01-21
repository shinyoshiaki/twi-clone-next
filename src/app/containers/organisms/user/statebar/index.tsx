import React, { FunctionComponent } from "react";
import { Dispatch } from "redux";
import { SpaceRight, Button } from "../../../../style/emotion";
import { ReduxState } from "../../../../modules/createStore";
import { friendAddMod } from "../../../../modules/friend";

const UserStateOrg: FunctionComponent<{
  dispatch: Dispatch;
  reduxState: ReduxState;
  name: string;

  tweetNum: number;
  followNum: number;
  followerNum: number;
}> = ({ name, tweetNum, reduxState, dispatch, followNum, followerNum }) => {
  const handleFollow = () => {
    const { id, session } = reduxState.user;
    if (id && session) friendAddMod(id, session, name, dispatch);
  };

  const isFollow = reduxState.friend.follow.includes(name);

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
        follow<div style={{ color: "#259FF2" }}>{followNum}</div>
      </SpaceRight>
      <SpaceRight>
        follower<div style={{ color: "#259FF2" }}>{followerNum}</div>
      </SpaceRight>
      <Button
        background={isFollow ? "#2C9DF2" : "#66737D"}
        style={{ marginLeft: "auto", marginRight: 50, marginTop: 10 }}
        onClick={() => handleFollow()}
      >
        {isFollow ? "followed" : "follow"}
      </Button>
    </div>
  );
};

export default UserStateOrg;
