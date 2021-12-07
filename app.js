var     path    = require('path');
const   express = require('express');
var     pgdata  = require('./pgdata');
const   app     = express();

const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => res.send('Hello world!'));
app.listen(port, () => console.log('Example app listening on port ${port}'));

app.get('/LNG_01', pgdata.viewStatus1);
app.get('/LNG_02', pgdata.viewStatus2);
app.get('/LNG_03', pgdata.viewStatus3);
app.get('/LNG_04', pgdata.viewStatus4);