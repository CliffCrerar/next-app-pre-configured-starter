
/**
* Navigation control
*/
import NavLinks from './_1_page-nav-links';

export default (props) => {
    // console.log('NAVBAR', props);
    return (
        <React.Fragment>
            <nav className="nav-links">
                <div className="navbar-left">
                    <NavbarBrand conf={props.conf} />
                    <ul><NavLinks /></ul>
                </div>
                <div className="logout-link">
                    <LogOut conf={props.conf} />
                    <PageAuthor conf={props.conf} />
                </div>
            </nav>
            <hr className="nav-bottom-line" />
        </React.Fragment>
    )
}

function NavbarBrand(props) {
    if (props.conf.switches.displayNavBarBrand) {
        return (
            <h4>{props.conf.nav.navbarBrand}</h4>
        )
    } else {
        return <div style={{ display: 'none' }}></div>
    }

}

function PageAuthor(props) {
    if (props.conf.switches.defaultPageAuthor) {
        return (
            <small>Page by
                <a
                    href={props.conf.nav.pageAuthor.link}
                    style={{ textDecoration: 'none' }}>
                    {props.conf.nav.pageAuthor.author}
                </a>
            </small>
        )
    } else {
        return <small style={{ display: 'none' }}></small>
    }
}

function LogOut(props) {
    if (props.conf.switches.defaultLogoutLink) {
        return (
            <a href="/logged-out">Logout</a>
        )
    } else {
        return (
            <a style={{ display: 'none' }} href="/logged-out">Logout</a>
        )

    }
}