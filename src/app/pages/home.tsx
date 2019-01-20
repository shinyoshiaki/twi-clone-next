import React, { FunctionComponent } from "react";
import { connect } from "react-redux";
import LayoutOrg from "../containers/organisms/common/layout";
import TimelineOrg from "../containers/organisms/home/timeline";
import MyProfile from "../containers/organisms/home/myprofile";
import { ReduxState } from "../modules/createStore";

const Home: FunctionComponent = () => {
  return (
    <LayoutOrg>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          minHeight: "95vh",
          paddingTop: 20
        }}
      >
        <MyProfile />
        <TimelineOrg />
      </div>
    </LayoutOrg>
  );
};

export default connect((state: ReduxState) => Object.assign({}, state.user))(
  Home
);
