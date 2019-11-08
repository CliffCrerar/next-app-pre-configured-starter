/**
 * NAV
 * INFO: App navbar classes, links,useBrandOrTitle, brand are set in ./src/config/conf.json
 * SET: classes for dynamic styling, for static styling nav.scss
 * SET: useBrandOrTitle to "brand" or "title":
 *  IF useBrandOrTitle set to "brand" then display custom and static brand attribute in ./src/config/conf.json 
 *  TODO: IF useBrandOrTitle set to "title" then dynamically display "title" attribute per current link
 */
import React, { Component } from 'react';
import NavBarLinks from './jsx-links';
export default class Nav extends Component {
  navLinks;
  constructor(props) {
    super(props)
    console.log('NAV props: ', props);
    // this.navLinks = this.props.config.links;
    this.state = {
      classes: this.props.classes,
    }
    this.handleBrandDisplay();
  }
  handleBrandDisplay = () => {
    switch (this.props.useBrandOrTitle) {
      case 'brand': return this.props.brand;
    }
    return this.state.brandDisplay;
  }
  render() {

    return (
      <nav style={this.state.classes}>
        <h4>{this.handleBrandDisplay()}</h4>
        <div>
          <NavBarLinks links={this.props.links} />
        </div>
      </nav>
    )
  }
}

