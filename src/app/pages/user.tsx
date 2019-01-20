import React from "react";
import LayoutOrg from "../containers/organisms/common/layout";
import { Center } from "../style/emotion";
import { req } from "../const";
import TimelineMol from "../components/molecules/timeline";
import UserStateOrg from "../containers/organisms/user/statebar";
import { ReduxState } from "../modules/createStore";

interface Props {
  name: string;
  tweets: any[];
  dispatch: any;
  reduxState: ReduxState;
}

class Page extends React.Component<Props> {
  static async getInitialProps({ store, query }) {
    const res = await req
      .post("/tweet/get/user", { code: query.code })
      .catch(console.log);
    const result = res ? res.data : [];
    return {
      name: result.name,
      tweets: result.tweets,
      dispatch: store.dispatch,
      reduxState: store.getState()
    };
  }
  render() {
    console.log(this.props);
    return (
      <LayoutOrg>
        <UserStateOrg
          dispatch={this.props.dispatch}
          reduxState={this.props.reduxState}
          name={this.props.name}
          isFollow={false}
          tweetNum={this.props.tweets.length}
        />
        <Center style={{ minHeight: "95vh", paddingTop: 30 }}>
          <TimelineMol
            timeline={this.props.tweets}
            onClickTweetName={() => {}}
          />
        </Center>
      </LayoutOrg>
    );
  }
}

export default Page;
