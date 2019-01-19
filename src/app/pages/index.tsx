import React, { FunctionComponent } from "react";
import { connect } from "react-redux";
import styled from "@emotion/styled";
import Router from "next/router";
import { ReduxState } from "../modules/createStore";
import { Button } from "../style/emotion";

const App: FunctionComponent<{}> = ({}) => {
  const Two = styled.div({ height: "100vh", display: "flex" });
  const Center = styled.div({
    width: "100%",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center"
  });
  return (
    <Two>
      <Center style={{ background: "#2394DF" }}>
        <p style={{ color: "white", fontSize: 20 }}>
          あなたの「好き」をフォローしましょう。
          <br />
          話題のトピックを追いかけましょう。
          <br />
          会話に参加しましょう。
        </p>
      </Center>
      <Center>
        <p>
          「いま」起きていることを見つけよう
          <br />
          <br />
          Twitterをはじめよう
          <br />
          <br />
          <Button
            onClick={() => {
              Router.push("/signup");
            }}
          >
            アカウント作成
          </Button>
          <br />
          <br />
          <Button
            onClick={() => {
              Router.push("/login");
            }}
          >
            ログイン
          </Button>
        </p>
      </Center>
    </Two>
  );
};

export default connect((state: ReduxState) => Object.assign({}, state.user))(
  App
);
