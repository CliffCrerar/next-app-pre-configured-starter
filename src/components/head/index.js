/**
 * App head component
 */
import React from 'react';
import Head from 'next/head';
export default (props) => {
    // console.log('HEAD props: ', props);

    return (
        <Head>
            <title>{props.title}</title>
            <link rel='icon' href='/favicon.ico' />
            <link rel="stylesheet" href="default-styles.css"/>
        </Head>
    )
}

