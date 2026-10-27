import { formatPrix } from "../utils/format";
import { ID, Statut, Categorie } from "./types";

export interface Affichable {
  afficher(): string;
}

export abstract class Produit implements Affichable {
  constructor(
    public readonly id: ID,
    public nom: string,
    protected _prix: number,
    public categorie: Categorie,
    public statut: Statut = "disponible"
  ) {}

  get prix(): number {
    return this._prix;
  }

  set prix(v: number) {
    if (v < 0) {
      console.warn(`Prix refusé (${v}) : un prix ne peut pas être négatif.`);
      return;
    }
    this._prix = v;
  }

  abstract resume(): string;

  afficher(): string {
    return `[${this.id}] ${this.nom} - ${formatPrix(this.prix)}`;
  }
}

export class Livre extends Produit {
  constructor(id: ID, nom: string, prix: number, public auteur: string) {
    super(id, nom, prix, Categorie.Livre);
  }

  resume(): string {
    return `Livre : ${this.nom} de ${this.auteur}`;
  }
}

export class Vetement extends Produit {
  constructor(id: ID, nom: string, prix: number, public taille: string) {
    super(id, nom, prix, Categorie.Vetement);
  }

  afficher(): string {
    return `${super.afficher()} (taille ${this.taille})`;
  }

  resume(): string {
    return `Vêtement : ${this.nom}, taille ${this.taille}`;
  }
}

// Classe complémentaire pour l'import de produits électroniques
export class Electronique extends Produit {
  constructor(id: ID, nom: string, prix: number, public garantieMois: number = 12) {
    super(id, nom, prix, Categorie.Electronique);
  }

  resume(): string {
    return `Électronique : ${this.nom}, garantie ${this.garantieMois} mois`;
  }
}
