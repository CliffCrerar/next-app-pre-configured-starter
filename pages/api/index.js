// import Authentication from '../../components/authentication';
const
    dotenv = require('dotenv'),
    str = require('./decode'),
    cors = require('./_cors.js'),
    fetch = require('isomorphic-unfetch'),
    devMode = process.env.NODE_ENV === 'development';

devMode && dotenv.config();
// API Entry
function EndPoint(req, res) {
    try { delegate(req, res) }
    catch (err) { res.status(500).json({ err }) };
}
// used to determine function to run according to query string action
function f() { return { login, getUser, logoutAll } }

async function delegate({ query, body, headers, cookies }, res) {
    const action = query.action;
    const params = getParams({ query, body, headers, cookies }, action);
    try {
        const
            dbRes = await f()[action](params).catch(err => { throw new Error(err) }),
            respBody = await dbRes.json(),
            status = dbRes.status,
            statusText = dbRes.statusText;

        // console.log('dbRes: ', dbRes);

        res.status(status).json({ statusText, data: respBody.token });


    } catch (err) {
        console.log('err 500: ', err);
        res.status(500).json({ err })
    };
}

function getParams(callItems, action) {
    // console.log('action: ', action);
    // console.log('callItems: ', callItems);
    switch (action) {
        case 'login': return JSON.parse(callItems.body).password;
        case 'getUser': return { headers: callItems.headers, cookies: callItems.cookies };
        case 'logout': return { cookies: callItems.cookies };
    }
}

async function getUser({ cookies }) {
    try {
        const
            method = "GET",
            apiUrl = process.env.DB_URL.concat('users/me'),
            Authorization = 'Bearer ' + cookies.siteAuthToken,
            reqHeader = { Authorization, 'Content-Type': 'application/json' },
            res = await fetch(apiUrl, { method, headers: reqHeader });
        return res;
    } catch (err) {
        console.error('ERROR: ', err);
        return err;
    }
}

async function login(pw) {
    // console.log('pw: ', pw);
    // console.log('str.decode(pw): ', str.decode(pw));
    const
        method = 'POST',
        email = process.env.EMAIL,
        password = str.decode(pw),
        apiUrl = process.env.DB_URL.concat('users/login'),
        headers = { 'Content-Type': 'application/json' },
        body = JSON.stringify({ email, password }),
        callOpts = { method, headers, body },
        dbRes = await fetch(apiUrl, callOpts);
    // console.log('callOpts: ', callOpts);
    return dbRes;
}

async function logoutAll({ cookies }) {
    // console.log('LG cookies: ', cookies);
    const
        method = 'POST',
        apiUrl = process.env.DB_URL.concat('users/me/logoutAll'),

        Authorization = 'Bearer ' + cookies.siteAuthToken,

        headers = { Authorization, 'Content-Type': 'application/json' },
        callOpts = { method, headers, Authorization },

        res = await fetch(apiUrl, callOpts).then(body=>body);
        // console.log('res: ', res);
    return res;
}

export default cors(EndPoint);