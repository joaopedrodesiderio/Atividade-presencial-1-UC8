let readlineSync = require ('readline-sync');
var nome_peca;
var peso_peca;
var capacidade = 10;

nome_peca = readlineSync.question("digite o nome da peça: ");
peso_peca = readlineSync.question("digite o peso da peça: ");

if(peso_peca > 100){
    if(capacidade > 10){
        console.log("Não cadastrar! capacidade maxima atingida!!!");
    } else if (nome_peca.lenght < 3){
        console.log("não cadastrar!! nome inválido!!!");
    } else{
     console.log("peça cadastrada com sucesso!");

    }
}else{
    console.log("não cadastrar! peso insuficiente!!!");

}