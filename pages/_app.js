/**
 * Pages parent container
 */
import React from 'react'
import App from 'next/app'
import Layout from 'components/layout'
// import cookies from 'js-cookie'
import { withRouter } from 'next/router'
class MyApp extends App {
  pageText = require('static/pageText.json');
  conf = require('config').Config;
  componentDidMount() {
    console.log('APP DID MOUNT');
    this.paragraphStart(); 
  }
  paragraphStart() {
    if (process.browser) {
      const paragraphs = document.getElementsByClassName('caps-start')
      for (let i = 0; i < paragraphs.length; i++) {
        let e = paragraphs[i];
        let text = e.innerHTML;
        let firstLetter = text.substring(0, 1);
        e.innerHTML = `<span class="big-Start">${firstLetter}</span>${text.substring(1, text.length).trim()}`
      }
    }
  }
  render() {
    const { Component, pageProps } = this.props
    pageProps.conf = this.conf
    return (
      <Layout conf={this.conf}>
        <Component pageText={this.pageText} {...pageProps} />
      </Layout>)
  }
}

export default withRouter(MyApp);