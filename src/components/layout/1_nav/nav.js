/**
 * NAV
 * INFO: App navbar classes, links,useBrandOrTitle, brand are set in ./src/config/conf.json
 * SET: classes for dynamic styling, for static styling nav.scss
 * SET: useBrandOrTitle to "brand" or "title":
 *  IF useBrandOrTitle set to "brand" then display custom and static brand attribute in ./src/config/conf.json 
 *  TODO: IF useBrandOrTitle set to "title" then dynamically display "title" attribute per current link
 */
import React, { Component } from 'react';
import NavBarBrand from './_navbar-brand';
import NavBarLeft from './_navbar-left';
import NavBarRight from './_navbar-right';
export default class Nav extends Component {
  navLinks;
  constructor(props) {
    super(props)
    // console.log('NAV props: ', props);
    // this.navLinks = this.props.config.links;
    this.state = {
      classes: this.props.classes,
      selectedLink: this.props.router.route
    }
    // this.handleBrandDisplay();
  }

  handleBrandDisplay = () => {
    switch (this.props.useBrandOrTitle) {
      case 'brand': return this.props.brand;
      case 'title': return this.props.title;
      case 'none': return ''
    }
  }
  render() {
    return (
      <nav style={this.state.classes.main}>
        <NavBarBrand brand={this.handleBrandDisplay()} />
        <NavBarLeft
          classes={this.state.classes}
          links={this.props.links}
          selected={this.state.selected} />
        <NavBarRight classes={this.state.classes['navbar-right']} />
      </nav>
    )
  }
}

