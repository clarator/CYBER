// Importer Express
const express = require('express');
const app = express();
const port = 3000;

// Définir un gestionnaire pour la route principale
app.get('/', (req, res) => {
  // Récupérer le paramètre 'name' dans l'URL, ou 'Guest' si non spécifié
  const userName = req.query.name || 'Guest';

  // Cette ligne est vulnérable à une attaque XSS : le nom de l'utilisateur est injecté dans la page HTML sans validation
  res.send(`
    <html>
      <head>
        <title>XSS Demo</title>
      </head>
      <body>
        <h1>Hello, ${userName}!</h1>
        <form method="GET" action="/">
          <input type="text" name="name" placeholder="Enter your name" />
          <button type="submit">Submit</button>
        </form>
      </body>
    </html>
  `);
});

// Démarrer le serveur sur le port 3000
app.listen(port, () => {
  console.log(`App running on http://localhost:${port}`);
});
