import React from "react";
import LayoutOrg from "../containers/organisms/common/layout";
import { Center } from "../style/emotion";
import { req } from "../const";
import TimelineMol from "../components/molecules/timeline";

interface Props {
  name: string;
  tweets: any[];
}

class Page extends React.Component<Props> {
  static async getInitialProps({ query }) {
    const res = await req
      .post("/tweet/get/user", { code: query.code })
      .catch(console.log);
    const result = res ? res.data : [];
    return { name: result.name, tweets: result.tweets };
  }
  render() {
    console.log(this.props);
    return (
      <LayoutOrg>
        <div
          style={{
            background: "white",
            color: "#66747E",
            fontSize: 30,
            padding: 10
          }}
        >
          {this.props.name}
        </div>
        <Center style={{ minHeight: "95vh", paddingTop: 30 }}>
          <TimelineMol timeline={this.props.tweets} onClickName={() => {}} />
        </Center>
      </LayoutOrg>
    );
  }
}

export default Page;
