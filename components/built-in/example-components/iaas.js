/**
 * COMPONENT: Infrastructure as a service
 */
import { Component } from 'react';
import Diagram from './cloud-diagram_1';
const
  diagramName = 'Cloud Architecture Diagram',
  diagramSubTitle = 'This is an rough estimation of what the Imagine Cloud architecture would look like.',
  diagramAuthor = 'Cliff Crerar'
class IaaS extends Component {
  constructor(props) {
    super(props);
    this.state = { height: 'none' }
  }
  componentDidMount() {
    const el = document.getElementById('container');
    const height = (el.clientWidth * 0.75);
    this.setState({ height });
  }
  render() {
    return (
      <section className="card">
        <div className="text-section">
          <h2>{diagramName}</h2>
          <p>{diagramSubTitle}</p>
          <hr />
          <div id="container">
            <Diagram height={this.state.height + 'px'} width="100%" />
          </div>
          <hr />
          <div style={{ textAlign: 'right' }}>
            <small>Author:
              <span>
                <a href="www.cliff-crerar.tech" href="_blank">{diagramAuthor}</a>
              </span>
            </small>
          </div>
        </div>
      </section>
    );
  }
}

export default IaaS
