
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
