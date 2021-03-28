import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head />
        <body className="dark:bg-gray-900 bg-white">
          <main className="px-8 md:m-auto md:max-w-screen-sm">
            <Main />
            <NextScript />
          </main>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
