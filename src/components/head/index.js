/**
 * App head component
 */
import React from 'react';
import Head from 'next/head';
export default (props) => {
    console.log('HEAD props: ', props);
    return (
        <Head>
            <title>{props.title}</title>
            <link rel='icon' href='/favicon.ico' />
            {/* <StyleLinks styleLinks={props.app_config.styles} /> */}
        </Head>
    )
}

function StyleLinks({ styleLinks }) {
    console.log('styleLinks: ', styleLinks);
    // const Links = styleLinks.map((l, i) => {
        // console.log('l: ', l);
        // <link rel="stylesheet" href={l} key={`style-link-${i}`} />
    // })
    return (
        <React.Fragment>
            {/* <Links /> */}
            <div>TEST</div>
        </React.Fragment>
    )
}