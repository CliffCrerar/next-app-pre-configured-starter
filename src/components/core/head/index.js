/**
 * COMPONENT: Page head
 */
import React from 'react'
import Head from 'next/head'
import { string, object } from 'prop-types'
import { Component } from 'react';
class AppHead extends Component {
    defaultDescription;
    defaultOGImage;
    defaultTitle;
    defaultViewPort;
    defaultOGURL = process.env.ORIGIN;


    constructor(props) {
        super(props)
        this.defaultDescription = this.props.conf.head.defaultDescription;
        this.defaultOGImage = this.props.conf.head.defaultOGimage;
        this.defaultViewPort = this.props.conf.head.defaultViewPort;
        this.defaultTitle = this.props.conf.head.defaultTitle;
        // console.log('props: ', props);
    }

    componentDidMount() {
        this.url = window.location.href;

        this.nextHeadPolyfill();
    }


    nextHeadPolyfill() {

        window.onload = function () {
            console.log('window loaded');
        }

        function runPolyFill() {
            var bodyLinks = document.body.getElementsByTagName('link');

            var bodyMeta = document.body.getElementsByTagName('meta');

            function forEach(callback) {
                console.log('fe', this)
                for (let i = 0; i < this.length; i++) {
                    callback(this[i], i);
                }
            }
            bodyLinks.forEach = forEach;
            bodyMeta.forEach = forEach;

            console.log('bodyLinks: ', bodyLinks);
            console.log('bodyMeta: ', bodyMeta);
            bodyLinks.forEach(appendHead)
            // bodyMeta.forEach(appendHead)

            function appendHead(...params) {
                // console.log(params);
                const el = params[0];

                const idx = params[1];

                const h = document.head;

                console.log('index: ', idx);
                console.log('element: ', el);


                h.appendChild(el);
                return;
            }
        }
        // for(link in bodyLinks){
        //     console.log(link);
        // }
        // for(meta in bodyMeta){
        //     console.log(meta);
        // }
        // document.head.appendChild(bodyLinks);
        // document.head.appendChild(bodyMeta);
    }
    render() {
        return (
            <Head>
                <meta charSet={this.props.conf.head.charset} />
                <title>{this.props.title}</title>
                <meta name="description" content={this.props.description || this.defaultDescription} />
                <meta name="viewport" content={this.props.viewPort || this.defaultViewPort} />
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
                <links rel="stylesheet" href="styles/default.css" />
            </Head>
        )
    }
}
AppHead.propTypes = {
    title: string,
    description: string,
    url: string,
    ogImage: string,
    config: object
}

AppHead.defaultProps = {
    ogImage: '',
    url: '',
    description: ''
}

export default AppHead