
/**
 * Link generator
 * Uses links from 'static/config/links.json
 */
import { Links } from 'config'
import { withRouter } from 'next/router';
import Link from 'next/link'
// Map links
const links = Links.main.map(link => {
    link.key = `nav-link-${link.href}-${link.label}`
    return link
});
// Nav links display at top and bottom of page
const NavLinks = (props) => {
    const route = props.router.route;
    return links.map(({ key, href, label, pageTitle }, i) => {
        function isActive(route) {
            if ('/' + href === route) {
                return 'isActiveNow';
            } else { return 'not-active'; }
        }
        if (i === 0) {
            return (
                <li key={key} className={isActive(route)}>
                    <Link href={'/' + href} as={'/' + href}>
                        <a title={'Manifesto'} style={{ textDecoration: 'none' }}>{label}</a>
                    </Link>
                </li>
            )
        } else {
            return (
                <li key={key} className={isActive(route)}>
                    <Link href={'/' + href} as={'/' + href}>
                        <a title={pageTitle} style={{ textDecoration: 'none' }}>{label}</a>
                    </Link>
                </li>
            )
        }
    })
}

export default withRouter(NavLinks);