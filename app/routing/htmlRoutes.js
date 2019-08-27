var app = express();
app.get('/survey', function (req, res) {
    res.send('hello world')
  })
  app.get('/*', function (req, res) {
    res.send('/home.html')
  })