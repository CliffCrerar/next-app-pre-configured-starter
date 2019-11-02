/**
 * Layout Index: Main entry point for the application layout.
 * import it into every page that is created an use as parent
 * element in all pages
 */

import { withRouter } from 'next/router'
import PagesLayout from './layout-master'
const LayOut = ({children, router}) => {
    const {excludeRoutes} = children.props.conf.layout;
    /* 
        ROUTING EVENTS
        - Each route has a life cycle and can be accessed as per 
          the function below.
        - The below fires when routing starts (if not commented out)
          there are different phases of routing and each phase's event
          can be accesses. For more see https://nextjs.org/docs#router-events
    */
   
    //-------------------------------------------------------------------------
    /*
            props.router.events.on('routeChangeStart', url => {
                console.log('ROUTE START: ', url);
            })
    */
    //-------------------------------------------------------------------------            
    
    /* ------------------------------------------------------------------------
        SELECTIVELY USING THE STATIC LAYOUT
        - The below if statement determines whether to use the static layout or not.
        - Set array object attribute 'excludeRoutes' in the static/config. Add the routes
            to exclude the usage of the layout for those routes.
     */
    if (excludeRoutes.includes(router.route)) {
        return children;
    } else {
        return <PagesLayout router={router} children={children} />
    }
    //-------------------------------------------------------------------------
}
export default withRouter(LayOut)
