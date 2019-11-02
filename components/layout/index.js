/**
 * COMPONENT: Main layout
 */

/**
* Navigation control and master layout
*/
import { withRouter } from 'next/router'
import PagesLayout from './layout-master'
import Link from 'next/link'



const LayOut = (props) => {
    console.log('props: ', props);
    const exl = '';
    props.router.events.on('routeChangeStart', url => {
        console.log('ROUTE START: ', url);
    })
    if (exl.split('|').includes(props.router.route)) {
        return props.children;
    } else {
        return <PagesLayout router={props.router} children={props.children} />
    }
}
export default withRouter(LayOut)
