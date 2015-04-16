var config = require('../config');
var superagent = require('superagent');
var async = require('async');

module.exports = function (app) {
  
  app.get('/comic/search', function(req, res) {

    superagent
      .get(config.api.baseurl + '/characters?filter=name:'+req.query.title)
      .query({format: 'json'})
      .query({limit: 10})
      .query({api_key: config.api.key})
        .end(function(err, result) {
        if (err || result.statusCode !== 200) {
          res.send(err);
        }
        else {
          res.json(result.body);
        }
        });
  
        
  });

app.get('/comic/details', function(req, res) {

    superagent
      .get(config.api.baseurl + '/character/'+ req.query.id +'?format=json')
      .query({api_key: config.api.key})
      .end(function(err, result) {
        if (err || result.statusCode !== 200) {
          res.send(err);
        }
        else {
          console.log(result.body);
          res.json(result.body);
        }
      });
  });


  app.get('/comic/versus', function(req, res) {

    async.parallel({
      heroDetail: function(next) {
        _characterDetails(req.query.hero, next);
      },
      
      villainDetail: function(next) {
        _characterDetails(req.query.villain, next);
      },
      
    }, function done(err, results) {
      if (err) {
        res.json(err);
      }
      else {
        res.json(results);
      }
    });
  });

};

function _characterDetails(id, callback) {
  superagent
      .get(config.api.baseurl + '/character/'+ id +'?format=json')
      .query({api_key: config.api.key})
      .end(function(err, result) {
      callback(err,result.body);
  });
}


