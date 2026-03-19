const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/bracket', async (req, res) => {
  const r = await fetch('https://site.api.espn.com/apis/site/v2/sports/basketball/mens-college-basketball/scoreboard?groups=100&limit=64');
  const json = await r.json();
  res.set('Access-Control-Allow-Origin', '*');
  res.json(json);
});

app.listen(process.env.PORT || 3000);
