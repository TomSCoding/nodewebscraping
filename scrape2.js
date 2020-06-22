const request = require("request");
const cheerio = require("cheerio");
const fs = require('fs');
const { count } = require("console");
const writeStream = fs.createWriteStream('post.csv')

// Write headers
writeStream.write(`Title, Link \n`)


request("http://example.webscraping.com/places/default/index/0", (error, response, html) => {
  if (!error && response.statusCode == 200) {
    const $ = cheerio.load(html);

    // Scrape country
    $("#results table tbody tr td div a").each((i, el) => {
      const country = $(el).text().replace(/\s\s+/g, "");

      const link = $(el).find('img').attr('src');

      // Write Row to csv
      writeStream.write(`${country}, ${link} \n`)
    });
  }
});

console.log('Scraping done!')

