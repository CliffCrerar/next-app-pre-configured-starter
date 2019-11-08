import React from 'react';
import App from 'next/app';
import Layout from 'layout';
import AppHead from 'head';
import PropTypes from 'prop-types'
import { confJSON } from '../config';

import 'styles.scss'
import { Router } from 'next/router';
console.log('confJSON: ', confJSON);

class NextApp extends App {
  appTitle;
  // Only uncomment this method if you have blocking data requirements for
  // every single page in your application. This disables the ability to
  // perform automatic static optimization, causing every page in your app to
  // be server-side rendered.
  //
  // static async getInitialProps(appContext) {
  //   // calls page's `getInitialProps` and fills `appProps.pageProps`
  //   const appProps = await App.getInitialProps(appContext);
  //
  //   return { ...appProps }
  // }

  constructor(props) {
    super(props)
    console.log('props: ', props);
    
  }

  componentDidMount(){
    this.getTitle()
  }

  componentDidUpdate(){
    this.getTitle()
  }

  getTitle(){
    const links = this.props.config.layout_config.nav.links;
    const route = this.props.router.route;
    return {title: links.filter(link=>link.href===route)[0].title}
  }

  render() {
    // console.log('APP PROPS',this.props);
    const { Component, pageProps, config , router} = this.props
    config.layout_config.header.title = this.getTitle().title;
    return (
      <React.Fragment>
        <AppHead {...this.getTitle()} />
        <Layout {...config }>
          <Component {...pageProps} />
        </Layout>
      </React.Fragment>
    )
  }
}

NextApp.propTypes = {
  config: PropTypes.object,
  router: PropTypes.object
}

NextApp.defaultProps = { 
  config: confJSON,
  router: Router
}

export default NextApp

