import { throws } from "assert";

/**
 * DEFAULT HEAD: NON Open graph meta tags
 */
import propTypes from 'prop-types';
const NonOpenGraphMeta = (props) => {
    defaultDescription = 'This is a Next.js webpage';
    defaultViewPort = 'width=device-width, initial-scale=1'
    return (
        <React.Fragment>
            <meta
                name="description"
                content={this.props.description || this.defaultDescription}
            />
            <meta name="viewport" content={this.defaultViewPort} />
        </React.Fragment>
    )
}

export default NonOpenGraphMeta;
