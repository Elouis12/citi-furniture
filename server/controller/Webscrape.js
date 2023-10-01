
const express = require('express');
const axios = require('axios');
const cors = require('cors');
const cheerio = require('cheerio');

const app = express();
app.use(cors());  // Allow cross-origin requests (for our React frontend)

app.get('/scrape-chairs', async (req, res) => {
    try {
        const response = await axios.get('https://www.cityfurniture.com/catalogsearch/result?q=chairs');
        const html = response.data;
        const $ = cheerio.load(html);

        let chairs = [];
        // This is hypothetical, inspect the site for the correct selectors
        $('.product-card').each((i, elem) => {
            chairs.push({
                title: $(elem).find('.title-class-name').text(),
                imageURL: $(elem).find('img').attr('src'),
                productURL: $(elem).find('a').attr('href'),
                description: $(elem).find('.description-class-name').text(),
                price: parseFloat($(elem).find('.price-class-name').text().replace('$', ''))
            });
        });

        res.json(chairs);
    } catch (error) {
        res.status(500).json({ error: 'Failed to scrape data' });
    }
});

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
});
