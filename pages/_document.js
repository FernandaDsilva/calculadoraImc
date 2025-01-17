import Document, { Html, Head, Main, NextScript } from 'next/document'

class NewDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }
    reder() {
        return (
            <Html>
                <Head>
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
                </Head>
                <body>
                    <Main />

                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default NewDocument