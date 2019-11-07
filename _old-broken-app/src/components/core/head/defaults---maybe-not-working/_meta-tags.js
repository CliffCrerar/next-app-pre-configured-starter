/**
 * DEFAULT HEAD: NON Open graph meta tags
 */
import {string} from 'prop-types';
import {Config} from 'config';
const NonOpenGraphMeta = (props) => {
    console.log('props: ', props);
    
    // defaultViewPort = 'width=device-width, initial-scale=1'
    return (
        <React.Fragment>
            <meta
                name="description"
                content={props.description || props.defaultDescription}
            />
            <meta name="viewport" content={props.viewPort || props.defaultViewPort} />
        </React.Fragment>
    )
}
NonOpenGraphMeta.propTypes = {
    defaultDescription: string,
    defaultViewPort: string,
    defaultTitle: string
}

NonOpenGraphMeta.defaultProps = {
    defaultDescription: Config.head.defaultDescription,
    defaultTitle: Config.head.defaultTitle,
    defaultViewPort: Config.head.defaultViewPort
}

export default NonOpenGraphMeta;
