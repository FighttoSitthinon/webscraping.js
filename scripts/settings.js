// urlsToScrape.js
const config = {
    stackOverflow: {
        scrapeUrl: 'https://stackoverflow.com/questions',
        selectedElement: '#questions > .s-post-summary'
    }
}

module.exports = { config };
