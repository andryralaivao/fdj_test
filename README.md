# FDJ - Exercice Technique

Le but de ce projet est de concevoir une application et API sur le football. L’API devra être développée en NodeJS et utiliser la base MongoDb fournie. La partie Front doit etre développée en
Angular.

## Comment lancer le projet

### Standalone

Pour le Frontend, referez vous au fichier `README.md` dans le dossier `frontend`.

Pour le Backend, referez-vous au fichier `README.md` ans le dossier `backend`.

Vous devez avoir votre propre serveur de base de données MongoDb qui est lancé indépendament.

### Docker

Les composants du projets ont été conçu pour être lancé dans des containers Docker.

Un fichier `docker-compose.yml` est aussi fourni pour offrir un setup par défaut.

Pour lancer l'application, vous devez avoir une installation Docker fonctionnel et lancer la commande.

``docker compose up -d --build``

### Make

Une configuration `make` est aussi fourni si vous disposez de l'outil sur votre installation.

Pour lancer l'environnement de `dev` lancer la commande:

``make dev``

## Variante

Une variante de configuration du projet permet d'utiliser directement l'api disponible sur `https://www.thesportsdb.com/api.php`. (Dans la limite des endpoints disponibles gratuitement)

Pour cela, vous pouvez modifier le fichier du frontend `frontend/src/app/pages/pages.module.ts`, en commentant les lignes `16`, `20`, `24` et en décommentant les lignes `15`, `19`, `23`.

## Reste à faire

- Exporter les configurations dans des variables d'envionnement configurables au lancement du projet
- Fournir un système de caching plus performant pour le deploiement
- Mettre en place et finaliser les tests unitaire pour le back