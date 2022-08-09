const num = Number(prompt('Digite um número')) //seu numero aqui
//1
if(num%2==0){
    if(num%3==0){
        console.log('O numero é divisivel por 2 e 3!')

    }else{
        console.log('O número é divisivel apenas por 2');
    }
}else{
    console.log('O numero não divisivel por 2')
}

//2
if(num%2==0 && num%3==0){
    console.log('O numero é divisivel por 2 e 3!')
}else{
    console.log('O numero não divisivel por 2')
}