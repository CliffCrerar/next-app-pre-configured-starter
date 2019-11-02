/**
 * Main site content container component
 */
import NavLinks from './nav-links'

export default ({ content }) => {
    const { showNavLinksBottom } = content.props.conf.layout;
    // Function determines whether bottom navigation setting is on or off
    function ShowBottomNavLinks() {
        if (showNavLinksBottom) {
            return (
                <React.Fragment>
                    <hr />
                    <ul className="nav-links">
                        <NavLinks />
                    </ul>
                    <hr />
                </React.Fragment>
            )
        }
    }
    return (
        <main>
            {content}
            <ShowBottomNavLinks />
        </main>
    )
}