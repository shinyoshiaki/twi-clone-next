import React from "react";
import LayoutOrg from "../containers/organisms/common/layout";
import { Center } from "../style/emotion";
import { req } from "../const";
import TimelineMol from "../components/molecules/timeline";
import UserStateOrg from "../containers/organisms/user/statebar";
import { ReduxState } from "../modules/createStore";
import { friendGetMod } from "../modules/friend";
import { connect } from "react-redux";

interface Props {
  name: string;
  tweets: any[];
  follow: string[];
  follower: string[];
  dispatch: any;
  reduxState: ReduxState;
}

class Page extends React.Component<Props> {
  static async getInitialProps({ store, query }) {
    const reduxState: ReduxState = store.getState();
    const { id, session } = reduxState.user;
    if (id && session) {
      const dispatch = store.dispatch;
      await friendGetMod(id, session, dispatch);
    }

    const tweetRes = await req
      .post("/tweet/get/user", { code: query.code })
      .catch(console.log);
    const tweetResult: { name: string; tweets: any[] } = tweetRes
      ? tweetRes.data
      : {};

    const friendRes = await req
      .post("/friend/get", { code: query.code })
      .catch(console.log);
    const friendResult: { follow: string[]; follower: string[] } = friendRes
      ? friendRes.data
      : {};
    const { follow, follower } = friendResult;
    return {
      name: tweetResult.name,
      tweets: tweetResult.tweets,
      follow,
      follower
    };
  }
  render() {
    const { follow, follower, name, tweets, reduxState } = this.props;
    return (
      <LayoutOrg>
        <UserStateOrg
          dispatch={this.props.dispatch}
          reduxState={reduxState}
          name={name}
          tweetNum={tweets.length}
          followNum={follow.length}
          followerNum={follower.length}
        />
        <Center style={{ minHeight: "95vh", paddingTop: 30 }}>
          <TimelineMol timeline={tweets} onClickTweetName={() => {}} />
        </Center>
      </LayoutOrg>
    );
  }
}

export default connect((reduxState: ReduxState) => {
  return { reduxState };
})(Page);
