/**
 * JSX LINKS
 * INFO: Is a sub component of nav gets links array as param and generates the navigation links jsx
 */
import Link from 'next/link';
export default ({ links }) => {
    // console.log('JSX links: ', links);
    return (
        <ul>
            {links.map((link, i) => <li key={`nav-link-${i}`}>
                <Link href={link.href} >
                    <a title={link.title} >{link.label}</a>
                </Link>
                {/* {JSON.stringify(link)} */}
            </li>)}
        </ul>
    )
}