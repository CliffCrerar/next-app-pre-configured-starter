import { Component } from 'react'
import { LeftArrow, RightArrow } from 'built-in/icons';
// Nav arrow buttons
export default class NavArrows extends Component {
    constructor(props) {

        super(props)
        console.log('NAV ARROWS: ', props);
        this.links = this.props.links;
        this.state = {
            leftArrow: { visibility: 'visible' },
            rightArrow: { visibility: 'visible' },
            pageNo: this.links.map(l => l.href).indexOf(this.props.router.route.replace('/', ''))
        }

    };
    // Component mounts
    componentDidMount = () => {
        this.props.router.events.on('routeChangeStart', url => this.setNewPageNo(url));
        this.props.router.events.on('routeChangeComplete', url => {
            this.handleControlsDisplay(this.state.pageNo);
            window.scroll({ top: 0, left: 0, behavior: 'smooth' });
        })
    }
    // Handle control display
    handleControlsDisplay = (newPage) => {
        console.log('newPage: ', newPage);
        if (newPage === 0) {
            return this.setState({ leftArrow: { visibility: 'hidden' }, rightArrow: { visibility: 'visible' } });
        } else if (newPage === (this.links.length - 1)) {
            return this.setState({ leftArrow: { visibility: 'visible' }, rightArrow: { visibility: 'hidden' } });
        } else {
            return this.setState({ leftArrow: { visibility: 'visible' }, rightArrow: { visibility: 'visible' } });
        }
    };
    // Handle click
    handleClick(e) {
        let newPageNo
        (e === 'left') && (newPageNo = this.state.pageNo - 1);
        (e === 'right') && (newPageNo = this.state.pageNo + 1);
        this.props.router.push('/' + this.links[newPageNo].href)
    };

    setNewPageNo = (url) => {
        const newPage = this.links.indexOf(this.links.filter(e => e.href === url.replace('/', ''))[0]);
        return this.setState({ pageNo: this.links.indexOf(this.links.filter(e => e.href === url.replace('/', ''))[0]) });
    }

    render() {
        if (this.props.conf.switches.displayNavArrows) {


            return (
                <div className="page-change-arrows">
                    <div
                        style={this.state.leftArrow}
                        className={`left-arrow`}
                        onClick={e => this.handleClick('left')}>
                        <div>
                            <LeftArrow />
                        </div>
                        <div className="text">Prev Page</div>
                    </div>
                    <div>
                        {/* control div to keep arrows in the right place */}
                    </div>
                    <div
                        style={this.state.rightArrow}
                        className={`right-arrow`}
                        onClick={e => this.handleClick('right')}>
                        <div className="text">Next Page</div>
                        <div>
                            <RightArrow />
                        </div>
                    </div>
                </div>
            )
        } else {
            return <div style={{display:'none'}}></div>;
        }
    };
}
