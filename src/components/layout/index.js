/**
 * App Layout
 */

import { withRouter } from 'next/router'
import Nav from 'layout/1_nav';
import Header from 'layout/2_header';
import Main from 'layout/3_main';
import Footer from 'layout/4_footer';

const Layout = (props) => (
    <React.Fragment>
        <Nav />
        <Header />
        <Main content={props.children} />
        <Footer />
    </React.Fragment>
)

export default withRouter(Layout);