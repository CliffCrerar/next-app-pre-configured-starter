import React from 'react';
import App from 'next/app';
import Layout from 'layout';
import AppHead from 'head';
import PropTypes from 'prop-types'
import { confJSON } from '../config';
import { Router } from 'next/router';
import 'global.scss'
// console.log('confJSON: ', confJSON);

class NextApp extends App {
  // Only uncomment this method if you have blocking data requirements for
  // every single page in your application. This disables the ability to
  // perform automatic static optimization, causing every page in your app to
  // be server-side rendered.
  //
  static async getInitialProps(appContext) {
    // calls page's `getInitialProps` and fills `appProps.pageProps`
    const appProps = await App.getInitialProps(appContext);
    console.log('appProps: ', appProps);

    return { ...appProps }
  }

  constructor(props) {
    super(props)
    // console.log('_app props: ', props);

  }

  // WHEN COMPONENT HAS MOUNTED
  componentDidMount() {
    this.props.showAppMount && console.log('APP DID MOUNT');
    this.displayBodyText();
    // this.getTitle();
  }

  // WHEN COMPONENT UPDATES
  componentDidUpdate() {
    this.props.showAppUpdate && console.log('APP DID UPDATE');
    // this.getTitle()
  }

  componentDidCatch() {
    console.log('this.props.err: ', this.props.err);
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
    // console.log('links: ', links);
    const route = this.props.router.route;
    // console.log('route: ', route);
    return links.filter(link => link.href === route)[0].title
  }

  render() {

    // console.log('APP PROPS',this.props);
    const
      { Component, pageProps, config } = this.props,
      appConf = config.app_config,
      layoutConf = config.layout_config;

      const AppComponents = ()=>(
        <React.Fragment>
          <AppHead {...appConf} />
          <Layout {...layoutConf} {...appConf}>
            <Component {...pageProps} />
          </Layout>
        </React.Fragment>
      )
    
    try {
      appConf.title = this.getTitle();
      appConf.error = {message: null, stack: null};
      return <AppComponents/>
    } catch (err) {
      appConf.title = "ERROR";
      appConf.error = {message: err.message, stack: err.stack};
      return <AppComponents/>
    }
  }
}
// Define prop types
NextApp.propTypes = {
  config: PropTypes.object,
  router: PropTypes.object,
  showAppMount: PropTypes.bool,
  showAppUpdate: PropTypes.bool
}
// Define default props
NextApp.defaultProps = {
  config: confJSON,
  router: Router,
  showAppMount: confJSON['dev-config'].display_App_component_mount,
  showAppUpdate: confJSON['dev-config'].display_App_component_update,
}

export default NextApp

