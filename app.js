// Full Documentation - https://docs.turbo360.co
const vertex = require('vertex360')({ site_id: process.env.TURBO_APP_ID })


const config = {
  views: 'views', // Set views directory
  static: 'public', // Set static assets directory
  logging: true,

   db: {
     url: 'mongodb://localhost/basketballdb',
     type: 'mongo',
     onerror: (err) =>
{
  //on failure log:
console.log('DB connection failed')
 // on success log:
}, onSuccess: () => {
  console.log('BasketballDB Connected!')
}
   }
}

vertex.configureApp(app, config)

// import routes
const index = require('./routes/index')
const api = require('./routes/api') // sample API Routes

// set routes
app.use('/', index)
app.use('/api', api) // sample API Routes

module.exports = app
