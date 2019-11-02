const pageDetails = require('../config').pageDetails;
// console.log('pagesDetails: ', pageDetails);

const allLinks = pageDetails.main.map(l => l).concat(pageDetails.nonNavLinks);
// console.log('allLinks: ', allLinks);
const exportMapTest = () => {
    staticPageMap = {}
    allLinks.forEach(link=>staticPageMap[link.href] = {page:link.href});
    return staticPageMap;
}

const exportMap = async function(){return exportMapTest()}


module.exports = { exportMap }