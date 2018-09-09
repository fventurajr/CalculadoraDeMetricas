function pfIndicativa() {
    // obtém os valores preenchidos pelo analista de pontos de função
    var ALI = Number(document.getElementById("ALI").value);
    var AIE = Number(document.getElementById("AIE").value);
    // calcula a contagem indicativa
    var resultado = document.getElementById("pfIndicativa");
    var pf = ALI * 35 + AIE * 15;
    
    resultado.textContent = "PF Indicativa = " + pf;
}
function pfEstimada() {
    // obtém os valores preenchidos pelo analista de pontos de função
    var ALI = Number(document.getElementById("ALIe").value);
    var AIE = Number(document.getElementById("AIEe").value);
    var EE  = Number(document.getElementById("EE").value);
    var SE  = Number(document.getElementById("SE").value);
    var CE  = Number(document.getElementById("CE").value);
    // calcula a contagem indicativa
    var resultado = document.getElementById("pfEstimada");
    var pf = ALI * 7 + AIE * 5 + EE *  5 + SE * 5 + CE * 4 ;
    
    resultado.textContent = "PF Estimada = " + pf;


}
var btnIndicativa = document.getElementById("btnIndicativa");
btnIndicativa.addEventListener("click", pfIndicativa);
var btnEstimada = document.getElementById("btnEstimada");
btnEstimada.addEventListener("click", pfEstimada);