// var - A ne plus utiliser
// Le JS fait du hoisting (remontée de variable)
function unScoped(){
	if (true) {
		var x = "var";
		console.log(x);
	}
	console.log(x); // pas de problème dû au hoisting
}

unScoped();

// let - contrairement à var est block-scoped - la portée de let est le bloc et non la fonction
function scoped(){
	if (true) {
		let x = "let";
		console.log(x);
	}
	console.log(x); // x is not defined
}

scoped();