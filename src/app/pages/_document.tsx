import Document, { Head, Main, NextScript } from "next/document";
import { extractCritical } from "emotion-server";

export default class MyDocument extends Document<{ css: any }> {
  static getInitialProps({ renderPage }) {
    const page = renderPage();
    const styles = extractCritical(page.html);
    return { ...page, ...styles };
  }

  constructor(props) {
    super(props);
    const { __NEXT_DATA__, ids } = props;
    if (ids) {
      __NEXT_DATA__.ids = ids;
    }
  }

  render() {
    return (
      <html>
        <Head>
          <title>Twitter clone</title>
          <style dangerouslySetInnerHTML={{ __html: this.props.css }} />
        </Head>
        <body
          style={{
            width: "100vw",
            overflowX: "hidden",
            padding: 0,
            margin: 0
          }}
        >
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
