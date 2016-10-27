var express = require('express')
var app = express()


// Moteur de template
app.set('view engine', 'ejs')


// Middlewares
app.use(express.static('public'))


// Routes
app.get('/', (req, res) => {
  res.render('list')
})


app.listen(8080)
