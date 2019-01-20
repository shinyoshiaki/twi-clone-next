import React, { FunctionComponent } from "react";
import { connect } from "react-redux";
import LayoutOrg from "../containers/organisms/common/layout";
import TimelineOrg from "../containers/organisms/home/timeline";
import { ReduxState } from "../modules/createStore";

const Home: FunctionComponent = () => {
  return (
    <LayoutOrg>
      <div style={{ minHeight: "95vh" }}>
        <TimelineOrg />
      </div>
    </LayoutOrg>
  );
};

export default connect((state: ReduxState) => Object.assign({}, state.user))(
  Home
);
