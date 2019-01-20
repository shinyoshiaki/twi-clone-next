import React, { FunctionComponent } from "react";
import { connect } from "react-redux";
import LayoutOrg from "../containers/organisms/common/layout";
import { ReduxState } from "../modules/createStore";
import { TweetState } from "../modules/tweet";
import SearchRes from "../containers/organisms/search/list";
import LoadingOverlay from "react-loading-overlay";
import { Center } from "../style/emotion";

interface Props extends TweetState {}

const User: FunctionComponent<Props> = props => {
  return (
    <LoadingOverlay
      active={props.ui.search}
      spinner
      text="Loading your content..."
    >
      <LayoutOrg>
        <div
          style={{
            background: "white",
            color: "#66747E",
            fontSize: 30,
            padding: 10
          }}
        >
          {props.searchWord}
        </div>
        <Center style={{ minHeight: "95vh", paddingTop: 30 }}>
          <SearchRes />
        </Center>
      </LayoutOrg>
    </LoadingOverlay>
  );
};

export default connect((state: ReduxState) => Object.assign({}, state.tweet))(
  User
);
