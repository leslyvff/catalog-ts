import { Catalogue } from "./services/Catalogue";
import { Livre, Vetement } from "./models/Produit";
import { formatPrix, somme, moyenne, etiquette } from "./utils/format";

// Test des utilitaires
console.log(formatPrix(500), "|", somme(2, 4, 6), "|", moyenne([2, 4, 6]));
console.log(etiquette(5), "|", etiquette("x"));

const cat = new Catalogue();
cat.ajouter(new Livre(1, "Things Fall Apart", 4500, "C. Achebe"));
cat.ajouter(new Vetement(2, "T-shirt", 3000, "M"));

for (const p of cat.lister()) {
  console.log(p.afficher()); // polymorphisme
  console.log("  ->", p.resume());
}
console.log("Total : " + cat.total());

cat.importer({ id: 3, nom: "Souris", prix: 2000, categorie: 2 }); // valide
cat.importer("donnée invalide"); // ignorée

console.log("Recherche id 3 :", cat.rechercherParId(3)?.afficher());
console.log("Recherche id 99 :", cat.rechercherParId(99)?.afficher() ?? "introuvable");
console.log("Total final : " + cat.total());
