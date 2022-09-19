const user = {
	id: 1,
	name: "Aria",
	address: {
		city: "Winterfell",
	},
};

console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));

const avengers = [
	"Iron Man",
	"Hulk",
	"Black Widow",
	"Captain America",
	"Hawkeye",
];

// for (const hero of avengers) {
// 	console.log(hero);
// }

// Map - applique la fonction sur chaque element du tableau et retourne un nouvel element
const newArrayOfAvengers = avengers.map((hero, index) => {
	console.log(hero, index);
	return hero;
});

console.log(newArrayOfAvengers);

// Filter - pplique la fonction sur chaque element du tableau et retourne l'element donné si la condition est true
const shortNameAvengers = avengers.filter((hero) => hero.length < 8);

console.log(shortNameAvengers);

// find: retourne le premier element qui correspond à la condition donnée
// findIndex: meme chose que find mais retourne l'index
// some: retourne un boolean si au moins un element correspond à la condition donnée
// every: retourne un boolean si TOUT les elements correspondent à la condition donnée
// reduce: applique le fonction sur chaque element à itérer

const newArrayOfAvengersWithReduce = avengers.reduce((accumulator, hero) => {
	if (hero.length < 8) {
		accumulator.push(hero);
	}
	return accumulator;
}, []);

console.log(newArrayOfAvengersWithReduce);

const facturesHT = [1000, 1200, 3000, 500];

// const facturesAvecTVA = facturesHT.map((facture) => facture * 1.2);
const facturesAvecTVA = facturesHT.reduce((acc, facture) => {
	acc.push(facture * 1.2);
	return acc;
}, []);

console.log(facturesAvecTVA);

const totalAvecTVA = facturesAvecTVA.reduce((acc, montant) => {
	return acc + montant;
}, 0);

console.log(totalAvecTVA);
