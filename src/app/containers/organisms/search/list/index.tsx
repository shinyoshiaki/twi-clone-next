import React from "react";
import { connect } from "react-redux";
import { ReduxState } from "../../../../modules/createStore";
import { Dispatch } from "redux";
import TimelineMol from "../../../../components/molecules/timeline";
import { TweetState } from "../../../../modules/tweet";
import { UserState } from "../../../../modules/user";
import router from "next/router";

interface Props {
  dispatch: Dispatch<any>;
  user: UserState;
  tweet: TweetState;
}

class SearchResOrg extends React.Component<Props> {
  handleClickName = v => {
    router.push(`/user?code=${v}`);
  };

  render() {
    const { searchRes } = this.props.tweet;
    return (
      <div>
        <TimelineMol timeline={searchRes} onClickName={this.handleClickName} />
      </div>
    );
  }
}

export default connect((state: ReduxState) => state)(SearchResOrg);
