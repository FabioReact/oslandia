// Ecrire une fonction qui me retourne le carré d'un nombre
function square(n) {
	return n * n;
}

// Avec une fonction anomyme
const squareV2 = function (n) {
	return n * n;
};

// Fonction fléchée
const squareArrow = (n) => {
	return n * n;
};

// Dans une fonction fléchée, si on UN ET UN SEUL parametre, on peut ommettre les parentheses
const squareArrowV2 = (n) => {
	return n * n;
};

// Dans une fonction fléchée, si la fonction ne fait qu'un return dans le traitement, alors on peut faire un return "implicite"
const squareArrowV3 = (n) => n * n;

const createUser = (firstname, job) => ({
	firstname, // équivalent à firstname: firstname
	job: job,
	role: "freshman",
});

createUser();

(function () {
	console.log("Fonction appellée immédiatement");
})();
