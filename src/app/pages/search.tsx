import React, { FunctionComponent } from "react";
import { connect } from "react-redux";
import LayoutOrg from "../containers/organisms/common/layout";
import { ReduxState } from "../modules/createStore";
import { TweetState } from "../modules/tweet";
import SearchRes from "../containers/organisms/search/list";

interface Props extends TweetState {}

const Home: FunctionComponent<Props> = props => {
  return (
    <LayoutOrg>
      <div style={{ minHeight: "95vh" }}>
        <div
          style={{
            background: "#259FF2",
            color: "white",
            fontSize: 30,
            padding: 10
          }}
        >
          {props.searchWord}
        </div>
        <SearchRes />
      </div>
    </LayoutOrg>
  );
};

export default connect((state: ReduxState) => Object.assign({}, state.tweet))(
  Home
);
