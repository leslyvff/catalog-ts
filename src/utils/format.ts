export function formatPrix(prix: number, devise: string = "FCFA"): string {
  return `${prix} ${devise}`;
}

export function somme(...valeurs: number[]): number {
  return valeurs.reduce((acc, v) => acc + v, 0);
}

export function moyenne(valeurs: number[]): number {
  if (valeurs.length === 0) return 0;
  return somme(...valeurs) / valeurs.length;
}

// Surcharge : deux signatures, une seule implémentation
export function etiquette(x: number): string;
export function etiquette(x: string): string;
export function etiquette(x: number | string): string {
  if (typeof x === "number") {
    return "Réf #" + x;
  }
  return x.toUpperCase();
}
