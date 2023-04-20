const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');

const PORT = 8000;

function scrapeData(url, itemProductCssSelector, itemProductInfosCssSelector, ItemProductTitleCssSelector, itemProductPriceCssSelector, itemProductImgCssSelector = "img") {

    const obj = {};

    return axios(url).then(response => {
        const html = response.data;
        
        // Get all the html content
        const $ = cheerio.load(html);
        
        // Sum of all prices
        let sumOfPrices = 0;
    
        obj.products = [];
    
        $(itemProductCssSelector, html).each(function() {

            const infos = $(this).find(itemProductInfosCssSelector);
            const title = infos.find(ItemProductTitleCssSelector).text();
            const price = infos.find(itemProductPriceCssSelector).text().trim();
            const img = $(this).find(itemProductImgCssSelector).attr("src");

            obj.products.push({
                title,
                price,
                img
            });

            sumOfPrices += parseInt(price.replace('$', ""));
        
        });

        const average = sumOfPrices / obj.products.length;
        obj.average = average;
        obj.count = obj.products.length;

        return obj;
    
    }).catch((err) => console.log("Fetch error " + err));;
    

}

const app = express();
  
app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));

app.get("/api/", async (req, res) => {
    /* GIRLFRIEND COLLECTIVE */
    const girlfriendCollectiveUrl = "https://girlfriend.com/collections/sweatshirts";

    // arrray of products, nb products, average price
    const girlfriendCollectiveData = await scrapeData(girlfriendCollectiveUrl, '.content-start div', 'a', 'h3', 'span');

    /* ORGANIC BASICS */
    const organicBasicsUrl = "https://organicbasics.com/collections/all-womens-products?filter=sweaters";
    // arrray of products, nb products, average price
    const organicBasicsData = await scrapeData(organicBasicsUrl, ".product-grid-item-container[data-tags*=Sweater]", ".product__grid--text-container", "a", ".product-price");

    return res.send({
        girlfriendCollectiveData,
        organicBasicsData
    });

});