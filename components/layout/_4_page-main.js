/**
 * Main site content container component
 */
import NavLinks from './_1_page-nav-links'

export default ({ content }) => {
    const { showNavLinksBottom } = content.props.conf.switches;
    // Function determines whether bottom navigation setting is on or off
    function ShowBottomNavLinks({ showNavLinksBottom }) {
        if (showNavLinksBottom) {
            return (
                <React.Fragment>
                    <hr />
                    <ul className="nav-links">
                        <NavLinks />
                    </ul>
                    
                </React.Fragment>
            )
        } else {
            return (
                <React.Fragment>
                    <div style={{ display: "none" }}></div>
                    <hr />
                </React.Fragment>
            )
        }
    }
    return (
        <main>
            {content}
            <ShowBottomNavLinks showNavLinksBottom={showNavLinksBottom} />
        </main>
    )
}