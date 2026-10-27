import { Produit, Livre, Vetement, Electronique } from "../models/Produit";
import { ID, Categorie, ProduitBrut } from "../models/types";
import { somme } from "../utils/format";

// Bonus : décorateur
function journal(cible: any) {
  console.log("Service enregistré : " + cible.name);
}

@journal
export class Catalogue {
  private produits: Produit[] = [];

  ajouter(p: Produit): void {
    this.produits.push(p);
  }

  lister(): Produit[] {
    return this.produits;
  }

  rechercherParId(id: ID): Produit | undefined {
    return this.produits.find((p) => p.id === id);
  }

  filtrerParCategorie(cat: Categorie): Produit[] {
    return this.produits.filter((p) => p.categorie === cat);
  }

  total(): number {
    return somme(...this.produits.map((p) => p.prix));
  }

  importer(donnee: unknown): void {
    if (!Catalogue.estProduitBrut(donnee)) {
      console.warn("Import ignoré : donnée invalide ->", donnee);
      return;
    }
    switch (donnee.categorie) {
      case Categorie.Livre:
        this.ajouter(new Livre(donnee.id, donnee.nom, donnee.prix, "Inconnu"));
        break;
      case Categorie.Vetement:
        this.ajouter(new Vetement(donnee.id, donnee.nom, donnee.prix, "N/A"));
        break;
      case Categorie.Electronique:
        this.ajouter(new Electronique(donnee.id, donnee.nom, donnee.prix));
        break;
    }
  }

  // Garde de type : vérifie la forme AVANT d'utiliser la donnée
  private static estProduitBrut(d: unknown): d is ProduitBrut {
    if (typeof d !== "object" || d === null) return false;
    if (!("id" in d) || !("nom" in d) || !("prix" in d) || !("categorie" in d)) return false;
    const o = d as Record<string, unknown>;
    return (
      (typeof o.id === "number" || typeof o.id === "string") &&
      typeof o.nom === "string" &&
      typeof o.prix === "number" && o.prix >= 0 &&
      typeof o.categorie === "number" && o.categorie in Categorie
    );
  }
}
