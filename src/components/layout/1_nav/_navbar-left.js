/**
 * NAVBAR LEFT
 * INFO: Is a sub component of nav gets links array as param and generates the navigation links
 */
import Link from 'next/link';
export default ({ links, classes, selected }) => {
    // console.log('JSX links: ', links);
    return (
        <div style={classes['navbar-left']}>
            <ul>
                {
                    links.map((link, i) =>
                        <li key={`nav-link-${i}`}>
                            <Link href={link.href} >
                                <a title={link.title} >{link.label}</a>
                            </Link>
                        </li>
                    )
                }
            </ul>
        </div>
    )
}