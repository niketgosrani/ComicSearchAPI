module.exports = function (app) {
  app.get('/', function(req, res) {
    res.render('comicsearch');
  });
  app.get('/viewComic/:id', function(req, res) {
    res.render('detail');
  });

    app.get('/help', function(req, res) {
    res.render('help');
  });

 	app.get('/versusComic/:hero/versus/:villain', function(req, res) {
    res.render('versus');
  });

};