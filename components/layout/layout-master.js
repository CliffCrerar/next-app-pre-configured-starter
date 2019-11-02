import AppHead from 'built-in/head';
import PageHeader from './page-header';
import NavArrows from '../page-nav-arrows'

const PagesLayout = (props) => {
    function pageTitle(){
        try {
            return Links.main.concat(Links.sub).filter(link => '/'.concat(link.href) === props.router.pathname)[0].pageTitle;
        }catch(err){
            const errMsg = `Page Title Error: ${err}`
            console.error(errMsg)
            return err;
        }
    }
    
    return(
    <React.Fragment>
        <AppHead title={pageTitle(props)} />
        {/* Navigation bar */}


        {/* PAGE HEADER */}
        <PageHeader/>
        {/* PAGE BODY */}
        <main>
            {props.children}
            <hr />
            <ul className="nav-links"><DisplayLinks router={props.router} /></ul>
            <hr />
            <NavArrows router={props.router} links={Links.main} /> {/* bottom navigation */}
        </main>
        <footer>
            {/* FOOTER */}
        </footer>
        {/* <MousePos /> */}
    </React.Fragment>
)}