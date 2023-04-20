const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');

const PORT = 8000;


const url = "https://www.theguardian.com/international";
axios(url).then(response => {
    const html = response.data;

    // Get all the html content
    const $ = cheerio.load(html);

    const articles = [];

    // Get the title
    $('.fc-item__title', html).each(function() {
        const title = $(this).text();
        const url = $(this).find('a').attr('href');

        articles.push({
            title,
            url
        })
        console.log(articles);
    })

})


const app = express();
  
app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));
