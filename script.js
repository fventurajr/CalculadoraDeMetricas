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

function selecionaTipo() {

    // esconde todas as contagens
    var secao1 = document.getElementById("secao1");
    var secao2 = document.getElementById("secao2");
    /*
    secao1.style.display="none";
    secao1.style.visibility="hidden";
    secao2.style.display="none";
    secao2.style.visibility="hidden";
    */
    var rbTipos = document.getElementsByName("tipo");
    var rbIndicativa = document.getElementById("Indicativa");
    var rbEstimada   = document.getElementById("Estimada");
    var rbEstimada   = document.getElementById("Detalhada");
    secao2.style.display="block";
    secao2.style.visibility="visible";
    switch ( rbTipos.values ) {
        case 1 :
            secao1.style.display="block";
            secao1.style.visibility="visible";
            break;
        case 2 :    
           secao2.style.display="block";
           secao2.style.visibility="visible";
           break;
        default :
           console.log("nada selecionado!!!"); 
    }


}
function Mudarestado(el) {
    var display = document.getElementById(el).style.display;
    if(display == "none")
        document.getElementById(el).style.display = 'block';
    else
        document.getElementById(el).style.display = 'none';
}

// evento para contagem de pontos de função indicativa
var btnIndicativa = document.getElementById("btnIndicativa");
btnIndicativa.addEventListener("click", pfIndicativa);

// evento para contagem de pontos de função estimada
var btnEstimada = document.getElementById("btnEstimada");
btnEstimada.addEventListener("click", pfEstimada);

// evento para o tipo de contagem: [ Indicativa | Estimada | Detalhada ]
/*
var rbIndicativa = document.getElementById("Indicativa");
var rbEstimada   = document.getElementById("Estimada");
var rbEstimada   = document.getElementById("Detalhada");
var rbTipos = document.getElementsByName("tipo");
rbTipos.addEventListener("change", selecionaTipoContagem);
*/