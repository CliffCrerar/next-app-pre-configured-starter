/**
 * Page tab title
 */
import { string } from 'prop-types'
const AppTitle = ({ charset, children }) => {

    return (
        <React.Fragment>
            <meta charSet={charset} />
            <title>{children}</title>
        </React.Fragment>
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