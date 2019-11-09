/**
 * HOSTS
 * Configures the host environment variable for ORIGIN_URL in the next.config.js.
 * for this version only used to do isomorphic-unfetch in the api.
 */
module.exports = (mode) =>{
    const
        protocol = mode ? 'http' : 'https', // protocol
        host = mode ? 'localhost' : require('os').hostname(), // hostname
        port = mode ? ':3000' : '80' || '443'; // port
    return `${protocol}://${host}${port}`
}