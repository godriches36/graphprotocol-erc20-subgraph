// This is the server file.

const express = require('express')
const cors = require('cors')
const rateLimit = require('express-rate-limit')
require('dotenv').config()

const PORT = process.env.PORT || 3000

const app = express()

// Rate limiting, limit the number of requests a user can send within a specific amount of time.
// With this setup, the user can only make 100 request max every 10 minutes.
const limiter = rateLimit({
    WindowMs: 10 * 60 * 1000, // 10 minutes in ms.
    max: 100  // 100 request max.
})
app.use(limiter)
app.set('trust proxy', 1)

// Set static folder; this allows our server to pick up the HTML file in the src folder.
app.use(express.static('src'))

// Routes
// This route looks into the index.js file in the routes folder and picks up the '/' route.
app.use('/api', require('./routes'))

// Enable cors
app.use(cors())

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
