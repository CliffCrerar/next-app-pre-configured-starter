/**
 * App Layout
 */

import { withRouter } from 'next/router'
import Nav from 'layout/1_nav';
import Header from 'layout/2_header';
import Main from 'layout/3_main';
import Footer from 'layout/4_footer';

const Layout = (props) => {
    // console.log('LAYOUT props: ',props);
    // console.log('LAYOUT config: ', config);
    // console.log('LAYOUT children: ', children);
    // console.log('LAYOUT router: ', router);
    
    const {router,children,layout_config}=props;
    return (
        <React.Fragment>
            <Nav {...layout_config.nav} router={router} />
            <Header  {...layout_config.header}/>
            <Main {...layout_config.main} Content={()=>children} />
            <Footer {...layout_config.footer}/>
        </React.Fragment>
    )
}

export default withRouter(Layout);