// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  const altura = +prompt("Digite a altura do retângulo:")
  const largura = +prompt("Digite a largura do retângulo:")
  let area = altura*largura
  console.log(area);

} 

// EXERCÍCIO 02
function imprimeIdade() {
  let anoAtual = +prompt("Digite em qual ano estamos:")
  const anoDeNascimento = +prompt("Digite o ano do seu nascimento:")
  let idade = anoAtual-anoDeNascimento
  console.log(idade)

}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  let imc = peso/(altura*altura)
  return imc

}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  const nome = prompt("Digite o seu nome:")
  let idade = +prompt("Digite sua idade:")
  let email = prompt("Digite o seu email:")
  
  console.log("Meu nome é " + nome +", tenho "+ idade+ " anos, e o meu email é "+ email+".")
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  const corUm = prompt("Qual a sua cor favorita?")
  const corDois = prompt("Qual sua segunda cor favorita?")
  const corTres = prompt("Qual sua terceira cor favorita?")
  const coresFavoritas = [corUm, corDois, corTres]
  console.log(coresFavoritas);

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  const maiusculo = string.toUpperCase()
  return maiusculo
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  let quantidadeIngressos = custo/valorIngresso
  return quantidadeIngressos

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  let tamanhoString1 = string1.length
  let tamanhoString2 = string2.length
  conferirTamanho = tamanhoString1 === tamanhoString2
  return conferirTamanho

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  const primeiroElemento = array[0]
  return primeiroElemento

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  const numeroDeElementos = array.length
  const ultimoElemento = array [numeroDeElementos-1]
  return ultimoElemento

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  const primeiroElemento = array[0]
  const ultimoElemento = array[array.length-1]
  
  array.pop()
  array.push(primeiroElemento)

  array.shift()
  array.unshift(ultimoElemento)

  return array

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  let maiusculoUm = string1.toUpperCase()
  let maiusculoDois = string2.toUpperCase()
  let checagem = maiusculoUm===maiusculoDois
  return checagem

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  let anoAtualUm = +prompt("Qual o ano atual?")
  const anoNascimento = +prompt("Qual o ano do seu nascimento?")
  let anoCarteiraIdentidade = +prompt("Qual o ano que foi emitida sua Carteira de Identidade?")
  let idade = anoAtualUm-anoNascimento
  let tempoSemTrocarRG = anoAtualUm-anoCarteiraIdentidade
  
  let necessidadeRenovacaoUm = (idade<=20) && (tempoSemTrocarRG>=5)
  let necessidadeRenovacaoDois = (idade>20 && idade<=50) && (tempoSemTrocarRG>=10)
  let necessidadeRenovacaoTres = (idade>50) && (tempoSemTrocarRG>=15)
  let renovacao = (necessidadeRenovacaoUm || necessidadeRenovacaoDois || necessidadeRenovacaoTres)
  console.log(renovacao);

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}