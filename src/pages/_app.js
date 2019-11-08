import React from 'react';
import App from 'next/app';
import Layout from 'layout';
import AppHead from 'head';
import PropTypes from 'prop-types'
import { confJSON } from '../config';
import { Router } from 'next/router';
import 'styles.scss'
// console.log('confJSON: ', confJSON);

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

  // constructor(props) {
  //   super(props)
  //   console.log('props: ', props);

  // }

  // WHEN COMPONENT HAS MOUNTED
  componentDidMount() {
    console.log('APP DID MOUNT');
    this.displayBodyText();
    this.getTitle();
  }

  // WHEN COMPONENT UPDATES
  componentDidUpdate() {
    this.getTitle()
  }

  // DEV TOOL
  displayBodyText() { 
    if (this.props.config.app_config.displayBodyText) {
      const divEl = document.createElement('div')
      divEl.innerHTML = `<h1 style="position: absolute; top: 50%">Body</h1>`;
      document.body.prepend(divEl);
    }
  }

  // Get the app title from the route and the links in the config file
  getTitle() {
    const links = this.props.config.layout_config.nav.links;
    const route = this.props.router.route;
    return { title: links.filter(link => link.href === route)[0].title }
  }

  render() {
    // console.log('APP PROPS',this.props);
    const { Component, pageProps, config, router } = this.props
    config.layout_config.header.title = this.getTitle().title;
    return (
      <React.Fragment>
        <AppHead {...this.getTitle()} />
        <Layout {...config}>
          <Component {...pageProps} />
        </Layout>
      </React.Fragment>
    )
  }
}
// Define prop types
NextApp.propTypes = {
  config: PropTypes.object,
  router: PropTypes.object
}
// Define default props
NextApp.defaultProps = {
  config: confJSON,
  router: Router
}

export default NextApp

