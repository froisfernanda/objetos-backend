const carro = {
    placa: "ADJ-9824",
    modelo: "Gol",
    cor: "prata",
    acessorios: [
        "insufilm",
        "tapete",
        "sensor",
    ]
};

carro.cor = "preto" 

carro.marca = "Volkswagen" 

carro.especificacoes = {
    motor: "1.0",
    potencia: "104 cv 5.250 rpm",
    peso: 893,
}

carro.descrever = function() {
    console.log(`O carro comprado é ${this.marca} ${this.modelo}, peso ${this.especificacoes.peso} e cor ${this.cor}`)
}

carro.descrever()

console.log(carro.cor) 
console.log(carro["modelo"]) 
console.log(`O carro comprado é ${carro["modelo"]} ${carro["cor"]} e de placa ${carro["placa"]}`) 

for (let chave in carro) {
    let tipo = typeof carro[chave];
    if (tipo !== "object" && tipo !== "function") {
      console.log(`A chave ${chave} tem valor ${carro[chave]}`);
    }
  }

const proprietario = {
    nome: "Cláudio",
    idade: 22,
    categoriaCnh: "C",
    ...carro
}

console.log(proprietario)