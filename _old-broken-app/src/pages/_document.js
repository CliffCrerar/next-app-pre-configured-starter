// _document is only rendered on the server side and not on the client side
// Event handlers like onClick can't be added to this file

// ./pages/_document.js
import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    componentHasMounted() {
        console.log('Document has');
    }

    componentWillMount(){
        console.log('Will mount');
        
    }

    componentDidMount(doc) {
        // console.log('doc: ', doc);
        console.log('Document did');
        //       document.addEventListener('loadend',function(){
        //           console.log('!! - Document Loaded');
        //       })

    }
    compo

    test(ev){
        console.log('ev:',ev);
    }

    render() {
        // this.componentHasMounted(document);
        return (
            <Html>
                <Head />
                <body onload={(ev)=>this.test(ev)}>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument