const scraped_path = './scraped/'
const domain = process.env.domain

const express = require('express'),
      app = express()

app.listen(3001)

app.use( express.static(scraped_path + domain) )
