const axios = require('axios');
const cheerio = require('cheerio');
const { config } = require('./settings');

// Function to fetch and parse the HTML content
async function fetchHTML(url) {
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        throw new Error(`Error fetching the URL: ${error}`);
    }
}

async function scrapeDataFormStackOverflow() {
    const html = await fetchHTML(config.stackOverflow.scrapeUrl);
    const $ = cheerio.load(html);

    const results = [];

    $(config.stackOverflow.selectedElement).each((index, element) => {
        // console.log(element.attribs.id)
        const title = $(`#${element.attribs.id} .s-post-summary--content-title`).text();
        const summary = $(`#${element.attribs.id} .s-post-summary--content-excerpt`).text();
        const username = $(`#${element.attribs.id} .s-user-card--info a.flex--item`).text();
        const pathUrl = $(`#${element.attribs.id} .s-post-summary--content-title a.s-link`).attr('href');
        if (title) {
            results.push({index, title, summary, username, pathUrl});
        }
    });

    return results;
}

async function scrapingListData() {
    return await scrapeDataFormStackOverflow()
}

module.exports = { scrapingListData };
