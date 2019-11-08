/**
 * App Layout
 */

import { withRouter } from 'next/router'
import Nav from 'layout/1_nav';
import Header from 'layout/2_header';
import Main from 'layout/3_main';
import Footer from 'layout/4_footer';
const Layout = (props) => {
    // console.log('LAYOUT props: ', props);
    const { router, children, nav, header, title, main, footer } = props;
    return (
        <React.Fragment>
            <Nav {...nav} router={router} />
            <Header  {...header} title={title} />
            <Main {...main} Content={() => children} />
            <Footer {...footer} />
        </React.Fragment>
    )
}

export default withRouter(Layout);