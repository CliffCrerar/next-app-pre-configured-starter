/**
 * LAYOUT Index component
 */
import { withRouter } from 'next/router'
import Nav from 'layout/1_nav';
import Header from 'layout/2_header';   
import Main from 'layout/3_main';
import Footer from 'layout/4_footer';
import ConditionalHr from 'core/conditional-hr'
const Layout = (props) => {
    // console.log('LAYOUT props: ', props);
    const { router, children, nav, header, titles, main, footer, error, general } = props;
    return (
        <React.Fragment>
            <Nav {...nav} router={router} title={titles.title} />
            <ConditionalHr {...general}/>
            <Header  {...header} titles={titles} />
            <ConditionalHr {...general}/>
            <Main error={error} {...main} Content={() => children} />
            <ConditionalHr {...general}/>
            <Footer {...footer} title={titles.title} brand={nav.brand}/>
        </React.Fragment>
    )
}

export default withRouter(Layout);