# Utiliser une image de base Node.js
FROM node:16-slim

# Créer un répertoire pour l'application
WORKDIR /usr/src/app

# Copier les fichiers de dépendances (package.json) dans le conteneur
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier tout le code source dans le conteneur
COPY . .

# Exposer le port 3000 pour accéder à l'application
EXPOSE 3000

# Commande pour démarrer l'application
CMD ["node", "app.js"]
