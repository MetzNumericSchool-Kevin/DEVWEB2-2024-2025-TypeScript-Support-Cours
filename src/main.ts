// Quand on ne type pas, TypeScript essaye de deviner le type de la variable
// infer type ou en français une déduction de type
let a = "hello";

// Réassignation de type dynamique n'est pas souhaité en TypeScript
// a = 3;

// Dans le cas de TypeScript, si je ne passe pas le bon type de donnée attendu
// Il me relève une erreur
// const result = a.at("dzad");

const result = a.at(10);

console.log(result);

const isH = result?.includes("h") || false;
// const isH = result?.includes("h") ?? false;
// const isH2 = result?.includes("h") ? true : false;

console.log(isH);

// On peut typer nos variables avec un :
let b: number = 3;

// On peut typer les paramètres
// On peut typer le retour de fonction
//
// Le typage n'est pas forcément obligatoire
// si TypeScript peut deviner le type
function add(a: number, b: number): number {
  return a + b;
}

// void défini que la fonction ne retourne rien
function afficher(): void {
  console.log("hello");
}

// En mode strict, typescript n'accepte de type "any"
// c'est à dire un type qui peut être n'importe quelle donnée.
//
// Si le type n'est vraiment pas connu, on peut utiliser le type "unkown"
// any est le type par défaut quand vous ne faites pas de typage et que TypeScript ne peut pas déduire le type
function unknowParameter(a: unknown) {
  // Si je fais un test qui permet de déduire le type de donnée
  if (typeof a === "string") {
    // TypeScript en déduira donc le type et on pourra l'utiliser comme tel
    a.includes("h");
  }
}

// c peut être de type string, number ou boolean ou non défini
let c: string | number | boolean | undefined;

// On peut type des structures plus complexes (tableaux et objets)

// Ici typescript va déduire le type du tableau (survoler avec le curseur pour voir le détail)
// const d = [1, "dzedjiz", false];

// Ici nous déclarons un tableau de booleens
// const d: Array<boolean> = [true, false, false];
// Une deuxième façon de le déclarer
const d: boolean[] = [true, false, false];

// Comme d'habitude, TypeScript déduit le type de item
// Déduit le type de retour de la méthode Map
const l = d.map((item) => {
  return item;
});

// Pour les objets

// On peut typer un objet et définir sa structure
const voiture: {
  marque: string;
  modele: string;
  couleur: string;
  prix: number;
  kilometrage: number;
} = {
  marque: "Peugeot",
  modele: "308",
  couleur: "noir",
  prix: 15000,
  kilometrage: 0,
};

// Si on souhaite du coup réutiliser la structure de voiture, on peut en faire
// un type ou une interface
type Voiture = {
  marque: string;
  modele: string;
  couleur: string;
  prix: number;
  kilometrage: number;
};

const voitureB: Voiture = {
  marque: "Peugeot",
  modele: "405",
  couleur: "blanche",
  prix: 15000,
  kilometrage: 100,
};

const voitureC: Voiture = {
  couleur: "",
  kilometrage: 3,
  marque: "",
  modele: "",
  prix: 0,
};

// La même chose est possible avec des interfaces
interface VoitureInterface {
  marque: string;
  modele: string;
  couleur: string;
  prix: number;
  kilometrage: number;
  // On peut aussi dans notre structure (interface ou type) décrire les signatures de nos méthodes
  // C'est à dire le type des paramètres, et également du retour
  allumer(): void;
  rouler: (vitesse: number) => void;
}

const voitureD: VoitureInterface = {
  marque: "",
  modele: "",
  couleur: "",
  prix: 0,
  kilometrage: 0,
  allumer: function (): void {
    throw new Error("Function not implemented.");
  },
  rouler: function (vitesse: number): void {
    throw new Error("Function not implemented.");
  },
};
