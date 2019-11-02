import Head from 'next/head'
import { Component } from 'react';
import cookies from 'js-cookie'
import Link from 'next/link';
export default class extends Component {
    constructor(props) {
        super(props)
        this.state = { state: 0 }
    }
    componentDidMount() {
        if (cookies.get(process.env.COOKIEID) === undefined) {
            return
        } else {
            fetch('/api?action=logoutAll')
                .then(res => { cookies.remove(process.env.COOKIEID) })
                .catch(err => console.error(err));
        }

    }
    render() {
        return (
            <React.Fragment>
                <Head>
                    <meta charSet="UTF-8" />
                    <title>Logged Out</title>
                    <link rel="stylesheet" href="static/style.css" />
                    <link rel="stylesheet" href="static/css/bs.css" />
                </Head>
                <style jsx>{`

                `}</style>
                <div className="container mt-5">
                    <h1>Logged Out</h1>
                    <h5>You are now logged out, either you have logged out or your session has expired.</h5>
                    <h6>Click the button below if you wish to log in again.</h6>
                    <Link href="/">
                        <a>
                            <button className="btn btn-primary">Home</button>
                        </a>
                    </Link>
                    <div>
                        <p className="rounded-lg bg-success display-block mt-5 p-2 text-white position-relative float-left">If you have chosen to log out, thank you for looking at the content of this site.</p>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}