import React from "react";
import { connect } from "react-redux";
import { ReduxState } from "../../../../modules/createStore";
import { Dispatch } from "redux";
import TimelineMol from "../../../../components/molecules/timeline";
import { TweetState, getTweetMod } from "../../../../modules/tweet";
import { UserState } from "../../../../modules/user";

interface Props {
  dispatch: Dispatch<any>;
  user: UserState;
  tweet: TweetState;
}

class TimelineOrg extends React.Component<Props> {
  componentDidMount() {
    const { id, session } = this.props.user;
    if (id && session) {
      getTweetMod(id, session, this.props.dispatch);
    }
  }

  handleClickName = () => {};

  render() {
    const { timeline } = this.props.tweet;
    return (
      <div>
        <TimelineMol timeline={timeline} onClickName={this.handleClickName} />
      </div>
    );
  }
}

export default connect((state: ReduxState) => state)(TimelineOrg);
