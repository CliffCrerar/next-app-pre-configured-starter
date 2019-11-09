export default (req, res) => {
  console.log('Called API');
    res.setHeader('Content-Type', 'application/json')
    res.statusCode = 200
    res.end(JSON.stringify({ name: 'Nextjs' }))
  }