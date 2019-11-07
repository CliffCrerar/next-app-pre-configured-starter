
import React, {Component} from 'react';
import Link from 'next/link';

// const links = [
//   { href: 'https://zeit.co/now', label: 'ZEIT' },
//   { href: 'https://github.com/zeit/next.js', label: 'GitHub' }
// ].map(link => {
//   link.key = `nav-link-${link.href}-${link.label}`
//   return link
// })

export default class Nav extends Component {
  constructor(props){
    super(props)
    this.state = {
      classes:{
        showElement:{
          display: 'block'
        }
      }
    }
  }
  render(){
    return (
      <nav className="test-class" style={this.state.classes.showElement}>
        LAYOUT COMPONENT: Navbar
      </nav>
    )
  }
}
