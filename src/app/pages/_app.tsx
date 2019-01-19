import App, { Container } from "next/app";
import * as React from "react";
import { Provider } from "react-redux";
import withRedux from "next-redux-wrapper";
import createStore from "../modules/createStore";

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    const pageProps = Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : {};

    return { pageProps };
  }
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <Provider store={(this.props as any).store}>
          <Component {...pageProps} />
        </Provider>
      </Container>
    );
  }
}

export default withRedux(createStore)(MyApp);
