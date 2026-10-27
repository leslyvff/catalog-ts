export enum Categorie { Livre, Vetement, Electronique }
export type Statut = "disponible" | "indisponible" | "promotion";
export type ID = number | string;
export type Dimensions = [largeur: number, hauteur: number];
export interface ProduitBrut {
  id: ID;
  nom: string;
  prix: number;
  categorie: Categorie;
}
