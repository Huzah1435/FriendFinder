var app = express();
app.get('/api/friends', function (req, res) {
    res.send('JSON will go here')
  })
  app.post('/api/friends', function (req, res) {
    res.send('input will go here')
  })