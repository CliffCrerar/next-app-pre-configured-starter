
import {Links,Config} from 'config'
const
links = Links.main.map(link => {
    link.key = `nav-link-${link.href}-${link.label}`
    return link
});

// Nav links display at top and bottom of page
const DisplayLinks = (props) => {
return links.map(({ key, href, label, pageTitle }, i) => {
    // console.log('i: ', i);
    function isActive(route) {
        if ('/' + href === route) {
            return 'isActiveNow';
        } else { return 'not-active'; }
    }
    if (i === 0) {
        return (
            <li key={key} className={isActive(props.router.route)}>
                <Link href={'/' + href} as={'/' + href}>
                    <a title={'Manifesto'} style={{ textDecoration: 'none' }}>{label}</a>
                </Link>
            </li>
        )
    } else {
        return (
            <li key={key} className={isActive(props.router.route)}>
                <Link href={'/' + href} as={'/' + href}>
                    <a title={pageTitle} style={{ textDecoration: 'none' }}>{label}</a>
                </Link>
            </li>
        )
    }
})
}