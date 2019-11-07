/**
 * Page tab title
 */
import { string } from 'prop-types'
import Head from 'next/head'
const AppTitle = ({ charset, children }) => {
    console.log('charset: ', charset);
    console.log('children: ', children);

    return (
        // <Head>
        //     <meta charSet={charset} />
        //     <title>{children}</title>
        // </Head>
    )

}

AppTitle.propTypes = {
    charSet: string,
    title: string
}

AppTitle.defaultProps = {
    charSet: 'UTF-8',
    title: 'Next.js Markdown Website'

}

export default AppTitle;