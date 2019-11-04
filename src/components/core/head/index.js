/**
 * COMPONENT: Page head
 */
import React from 'react'
import NextHead from 'next/head'
import { string } from 'prop-types'
import { Component } from 'react';
import {Config}from 'config';
import {AppTitle/*NonOpenGraphMeta*/,StyleLinks}from './defaults'
class Head extends Component {
    
    defaultOGImage='img/_og-image.png';
    defaultOGURL = process.env.ORIGIN;

    constructor(props) {
        super(props)
        console.log('props: ', props);
  }

    componentDidMount() {
        this.url = window.location.href;
    }

    render() {
        return (
            <NextHead>
                <AppTitle charset={this.props.conf.head.charset}>{this.props.title}</AppTitle>
                {/* <NonOpenGraphMeta/> */}
                <link rel="icon" sizes="192x192" href="/static/touch-icon.png" />
                <link rel="apple-touch-icon" href="/static/touch-icon.png" />
                <link rel="mask-icon" href="/static/favicon-mask.svg" color="#49B882" />
                <link rel="icon" href="/static/favicon.ico" />
                <meta property="og:url" content={this.props.url || this.defaultOGURL} />
                <meta property="og:title" content={this.props.title || ''} />
                <meta property="og:description" content={this.props.description || this.defaultDescription} />
                <meta name="twitter:site" content={this.props.url || this.defaultOGURL} />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:image" content={this.props.ogImage || this.defaultOGImage} />
                <meta property="og:image" content={this.props.ogImage || this.defaultOGImage} />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <StyleLinks/>
            </NextHead>
        )
    }
}
Head.propTypes = {
    title: string,
    description: string,
    url: string,
    ogImage: string
}

Head.defaultProps = {
    ogImage: Config.og.img,
    url:'',
    description: Config.head.defaultDescription
}

export default Head