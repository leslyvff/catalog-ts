# CataLog — gestionnaire de catalogue en TypeScript

Projet de synthèse (Modules 1 à 4) — IUSJC, Licence 2.

## Installation
```
npm install
```
## Compiler
```
npx tsc
```
## Exécuter
```
node dist/main.js
```
## Structure
- `src/models/` : types du domaine et classes (Produit, Livre, Vetement, Electronique)
- `src/utils/` : fonctions utilitaires (formatPrix, somme, moyenne, etiquette)
- `src/services/` : Catalogue (avec décorateur bonus `@journal`)
- `src/main.ts` : programme principal
