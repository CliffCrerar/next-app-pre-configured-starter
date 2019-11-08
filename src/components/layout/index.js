/**
 * App Layout
 */

import { withRouter } from 'next/router'
import Nav from 'layout/1_nav';
import Header from 'layout/2_header';
import Main from 'layout/3_main';
import Footer from 'layout/4_footer';

const Layout = (props) => {
    console.log('LAYOUT props: ',props);
    // console.log('LAYOUT config: ', config);
    // console.log('LAYOUT children: ', children);
    // console.log('LAYOUT router: ', router);
    
    const {router,children,nav,header,title,main,footer}=props;
    header.title = 
    console.log('header: ', header);
    // layout_config.header.title=layout_config.app_config.title
    return (
        <React.Fragment>
            <Nav {...nav} router={router} />
            <Header  {...header} title={title}/>
            <Main {...main} Content={()=>children} />
            <Footer {...footer}/>
        </React.Fragment>
    )
}

export default withRouter(Layout);