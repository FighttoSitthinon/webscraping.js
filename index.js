const { writeJSON } = require('./scripts/writeJSON');
const { scrapingListData } = require('./scripts/scrape');


// Execute the scraping function and log the results
scrapingListData()
    .then((results) => {
        writeJSON('result.json', results)
        console.log(results)
    })
    .catch((error) => {
        console.error('Error:', error.message);
    });
