
/**
* Navigation control
*/
import NavLinks from './_1_page-nav-links';

export default (props) => {
    console.log('NAVBAR',props);
    return (
        <React.Fragment>
            <nav className="nav-links">
                <div className="navbar-left">
                    <h4>NAV</h4>
                    <ul><NavLinks /></ul>
                </div>
                <div className="logout-link">
                    <a href="/logged-out">Logout</a>
                    <small>Page by <a style={{ textDecoration: 'none' }}>Cliff Crerar</a></small>
                </div>
            </nav>
            <hr className="nav-bottom-line" />
        </React.Fragment>
    )
}
