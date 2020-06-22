const request = require("request");
const cheerio = require("cheerio");

request("http://example.webscraping.com/", (error, response, html) => {
  if (!error && response.statusCode == 200) {
    const $ = cheerio.load(html);

    const siteHeading = $(".navbar-inner");
    // Print links in nav
    siteHeading.find('.nav .nav li a').each((i, el) => {
        console.log('Site nav link = '+$(el).text());
    });

    

  }
});
