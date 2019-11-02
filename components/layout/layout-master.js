/**
 * Layout Master
 * Consolidates all parts of the site layout and passes it to the index file
 */
import AppHead from 'built-in/head';
import Navbar from './navbar';
import PageHeader from './page-header';
import Main from './page-main'
import Footer from './page-footer';
import NavArrows from './page-nav-arrows'
import {Links} from 'config';

export default (props) => {
    /**
     * Set the title of each page in the browser tab, function uses the pageTitle attribute
     * from the links configuration in static/config
     */
    function pageTitle() {
        try { // error handling
            // return page title 
            return Links
            .main // use main links from config
            .concat(Links.sub) // join with sub links from config
            .filter(link => '/' // filter out links by route
            .concat(link.href) === props.router.pathname)[0] // filter discrimation
            .pageTitle; // get page title from filtration
        } catch (err) { // catch error
            const errMsg = `Page Title Error: ${err}` // set error message
            console.error(errMsg) // error log message to console
            return err; // return error
        }
    }
    return (
        <React.Fragment>
            <AppHead title={pageTitle(props)} /> {/* Pre configured Next.js Head object. Component can be found at components/head */}
            <Navbar/> {/* Navigation bar component */}
            <PageHeader /> {/* page header component */}
            <Main content={props.children}/> {/* page content */}
            <NavArrows router={props.router} links={Links.main} /> {/* Page navigation (next / previous page) */}
            <Footer/> {/* page footer component */}
            {/* <MousePos /> */}
        </React.Fragment>
    )
}