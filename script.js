
let btn = document.querySelector("#btn");

// imc : peso /(altura * 2) 

btn.addEventListener("click", function (){
let nome = document.querySelector("#nome").value
let altura = document.querySelector("#altura").value
let peso = document.querySelector("#peso").value
let msg = document.querySelector("#msg").innerHTML

if(nome !== "" && altura !== "" && peso !== ""){
let rest = (peso / (altura * altura)).toFixed(1);
alert(rest)

}else{
  msg = "oi"
}

})