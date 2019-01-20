import * as React from "react";
import LayoutOrg from "../containers/organisms/common/layout";
import router from "next/router";
import { Center } from "../style/emotion";
import { req, ITweet } from "../const";
import TimelineMol from "../components/molecules/timeline";

interface Props {
  word: string;
  tweets: ITweet[];
}

class Page extends React.Component<Props> {
  static async getInitialProps({ query }) {
    const res = await req
      .post("/tweet/get/search", { word: query.word })
      .catch(console.log);
    const result = res ? res.data : [];
    return { word: query.word, tweets: result.tweets };
  }

  handleClickName = v => {
    router.push(`/user?code=${v}`);
  };

  render() {
    return (
      <LayoutOrg>
        <div
          style={{
            background: "#259FF2",
            color: "white",
            fontSize: 30,
            padding: 10
          }}
        >
          {this.props.word}
        </div>
        <Center style={{ minHeight: "95vh", paddingTop: 30 }}>
          <TimelineMol
            timeline={this.props.tweets}
            onClickName={this.handleClickName}
          />
        </Center>
      </LayoutOrg>
    );
  }
}

export default Page;
