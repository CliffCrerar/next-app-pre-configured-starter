/**
 * Main site content container component
 */

export default ({ content }) => {
    return (
        <main>
            {content}
            <ShowBottomNavLinks showNavLinksBottom={showNavLinksBottom} />
        </main>
    )
}