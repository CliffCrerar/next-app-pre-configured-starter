// _document is only rendered on the server side and not on the client side
// Event handlers like onClick can't be added to this file

// ./pages/_document.js
import Document, { Html, Head, Main, NextScript } from 'next/document'
import Layout from 'layout';
import propTypes from 'prop-types';
class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }
    config = require('config').confJSON
    constructor(props) {
        super(props)
        this.appConf = this.config.app_config,
        this.layoutConf = this.config.layout_config;
    }

    componentDidMount(){
        // console.log(props);
        // console.log('NextScript: ', NextScript);
        // console.log('Main: ', Main);
        // console.log('Head: ', Head);
        // console.log('Html: ', Html);
        // console.log('Document: ', Document);
    }

    render() {
        return (
            <Html>
                <Head />
                <body>
                    {/* <Layout {...this.props.layoutConf} {...this.props.appConf}/> */}
                        <Main />
                    
                    <NextScript />
                </body>
            </Html>
        )
    }
}

// MyDocument.PropTypes = {
//     appConf: propTypes.object,
//     layoutConf: propTypes.object,
//     markdownConf: propTypes.object
// }


// MyDocument.DefaultProps = {
//     appConf: require('config').confJSON.app_config,
//     layoutConf: require('config').confJSON.layout_config,
//     markdownConf:require('config').confJSON.markdown_conf
// }

export default MyDocument