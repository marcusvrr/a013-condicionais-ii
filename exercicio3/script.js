//código a ser reescrito
const nome = prompt('Qual o seu nome?')
const idade = Number(prompt('Qual a sua idade?'))


/*if(nome === "José"){
	console.log("Oi, Zé!");
} else {
	console.log("Olá, "+nome);
}*/
console.log(nome==="José"? "Oi zé!":`Olá,${nome}`);

/*if(idade >= 18){
	console.log("pode tirar carteira de motorista!");
} else {
	console.log("Ainda não pode tirar carteira de motorista");
}*/
console.log(idade>=18? "pode tirar carteira de motorista!": "Ainda não pode tirar carteira de motorista")

