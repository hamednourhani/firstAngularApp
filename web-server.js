var express = require("express"),
  app = express(),
  port = parseInt(process.env.PORT, 10) || 6060;/**
 * Created by itstar on 03/07/2016.
 */
app.configure(function(){
  app.use(express.methodOverride());
  app.use(express.bodyParser());
  app.use(express.static(__dirname + '/'));
  app.use(app.router);
});
app.listen(port);
console.log('Now serving the app at http://localhost:' + port + '/app');
