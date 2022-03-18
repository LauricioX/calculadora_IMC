
let btn = document.querySelector("#btn");

// imc : peso /(altura * 2) 

btn.addEventListener("click", function (){
let nome = document.querySelector("#nome").value
let altura = document.querySelector("#altura").value
let peso = document.querySelector("#peso").value
let msg = document.querySelector("#msg");

if(nome !== "" && altura !== "" && peso !== ""){
let rest = (peso / (altura * altura)).toFixed(1);

let classi = ""
  
if(rest < 18){
  classi = "abaixo do peso!"
  limpar()
}else if(rest < 24){
  classi = " no peso normal!"
  limpar()
}else if(rest < 29){
  classi = " em sobrepeso!"
  limpar()
}else if(rest < 34){
  classi = " em grau de obesidade I! "
  limpar()
}else if(rest < 39){
  classi = " em grau de obesidade II! "
  limpar()
}else {
  classi = "em grau de obesidade III!"
  limpar()
}

msg.innerHTML = nome + " seu IMC é " + rest + " e você está " + classi;


}else{
  msg.innerHTML = "preencha todos os campos !"
}

})

function limpar(){
  document.querySelector("#nome").value = ''
   document.querySelector("#altura").value = ''
   document.querySelector("#peso").value = ''
   document.querySelector("#nome").focus()
}
