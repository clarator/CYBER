const express = require('express');
const app = express();
const port = 3002; // Utilisez un port différent de votre application XSS pour éviter les conflits.

app.get('/', (req, res) => {
  res.send('Welcome to the malicious website!');
});

app.get('/redirect', (req, res) => {
  // Rediriger vers un autre site
  res.redirect('https://site-malveillant.com'); // Vous pouvez remplacer l'URL par celle que vous souhaitez
});

app.listen(port, () => {
  console.log(`Malicious site running at http://localhost:${port}`);
});
