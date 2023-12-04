// Variáveis que armazenarão o nome e a quantidade de experiência (XP) do herói

let nome = ""
let experiencia = ""

// Variável que armazenará o nível do herói

let nivelDoHeroi

// Estrutura de decisão para apresentar as mensagens propostas 

// Se XP for menor do que 1.000 = Ferro
if(experiencia <= 1000){
    console.log("Ferro")
    nivelDoHeroi = "Ferro"
    
}

// Se XP for entre 1.001 e 2.000 = Bronze
else if(experiencia >= 1001 && experiencia <= 2000){
    console.log("Bronze")
    nivelDoHeroi = "Bronze"
}

// Se XP for entre 2.001 e 5.000 = Prata
else if(experiencia >= 2001 && experiencia <= 5000){
    console.log("Prata")
    nivelDoHeroi = "Prata"
}

// Se XP for entre 6.001 e 7.000 = Ouro
else if(experiencia >= 6001 && experiencia <= 7000){
    console.log("Ouro")
    nivelDoHeroi = "Ouro"
}

// Se XP for entre 7.001 e 8.000 = Platina
else if(experiencia >= 7001 && experiencia <= 8000){
    console.log("Platina")
    nivelDoHeroi = "Platina"
}

// Se XP for entre 8.001 e 9.000 = Ascendente
else if(experiencia >= 8001 && experiencia <= 9000){
    console.log("Ascendente")
    nivelDoHeroi = "Ascendente"
}

// Se XP for entre 9.001 e 10.000= Imortal
else if(experiencia >= 9001 && experiencia <= 10000){
    console.log("Imortal")
    nivelDoHeroi = "Imortal"
}

// Se XP for maior ou igual a 10.001 = Radiante
else if(experiencia >= 10001){
    console.log("Radiante")
    nivelDoHeroi = "Radiante"
}

// Exibindo a mensagem final

console.log("O herói de nome " + nome + " está no nível de " + nivelDoHeroi)