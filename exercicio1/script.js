const num = Number(prompt('Digite um número')) //seu numero aqui
//1
//Logica do bruno hammer / Daniel
const num = +prompt('digite um numero...')
if (num % 2 == 0) {
  if (num % 3 == 0) {
    console.log('O numero é divisivel por 2 e por 3')
  } else {
    console.log('O numero é divisivel por 2 ou por 3')
  }
} else if (num % 3 == 0) {
  console.log('O numero é divisivel por 2 ou por 3')
} else {
  console.log('O numero não é divisivel por 2 ou por 3')
}

//Logica Paula Labenu, o primeiro if so esta recebendo num então sempre passa!
if(num){
    if(num % 3 === 0){
        console.log("É dividido por 3")
    }if(num % 2 === 0){
        console.log("É dividido por 2")
    }
}else{
    console.log("O número não é dividido por 2 ou por 3.")
}

//2
if(num%2==0 && num%3==0){
    console.log('O numero é divisivel por 2 e 3!')
}else{
    console.log('O numero não divisivel por 2')
};
if (num%2==0 || num%3==0) {
    console.log('O numero é divisivel por 2 ou 3!')
}else{
    console.log('O numero não divisivel por 2')
};
