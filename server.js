//Install express server
const express = require('express');
const path = require('express');

const app = express();

// Serve only the static files from the dist directory
app.use(express.static('./dist/StarcraftRestApi'));
//app.use(express.static(__dirname + 'dist/frontend'));

app.get('/*', function(req,res) {

res.sendFile('index.html', {root: 'dist/StarcraftRestApi/'});
//res.sendFile(path.join(__dirname+'/dist/frontend/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);

