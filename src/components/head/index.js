/**
 * App head component
 */
import React from 'react';
import Head from 'next/head';
// import AddScripts from './add-scripts';
// import TuneHead from './tune-head';
// const TunedHead = TuneHead(Head);
const AppHead = (props) => {
	// console.log('TunedHead: ', TunedHead);
	// console.log('props: ', props);
    return (
        <Head>
			{/* <AddScripts/> */}
            <title>{props.titles.title}</title>
            <link rel='icon' href='/favicon.ico' />
            <link rel="stylesheet" href="default-styles.css"/>
        </Head>
    )
}

export default AppHead;
// const test1 = AddScripts(AppHead);
// export {test1}