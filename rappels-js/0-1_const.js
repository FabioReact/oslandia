// Types primitifs - on ne peut modifier ni le type ni le réaffecter
const firstname = "Fabio";
// firstname = 1;

// Types réference - attention, ce qui se trouve à l'intérieur d'un objet peut etre changé (ajouté, modifié ou supprimé). Ici, on stocke une reference à notre objet (et on ne sait pas ce qui se trouve à l'intérieur)
const user = {
	firstname: "Fabio",
	job: "dev",
};

user.firstname = "Julien";
user.age = 99;