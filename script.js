// Constantes
const ALIb = 7; const ALIm = 10; const ALIa = 15;
const AIEb = 5; const AIEm = 7;  const AIEa = 10;
const EEb  = 3; const EEm  = 4;  const EEa  = 6;
const SEb  = 4; const SEm  = 5;  const SEa  = 7;
const CEb  = 3; const CEm  = 4;  const CEa  = 6;
function GenerateTxtFile(nome, tipo, data, pf){

    var fso  = new ActiveXObject("Scripting.FileSystemObject");  
	var arquivo = "D:\\" + nome + "-" + tipo + "-" + data + ".csv";
	alert("Criando o arquivo " + arquivo);
	var file = fso.CreateTextFile(arquivo, true);
	file.writeline("Furnas Centrais Elétricas S/A" + " Contagem efetuada em " + data );
    file.writeline("SISTEMA" + nome);
    file.writeline("Contagem " + tipo + " = " + pf);
    file.Close();
}
function pfIndicativa() {
    // obtém os valores preenchidos pelo analista de pontos de função
    var ALI = Number(document.getElementById("ALI").value);
    var AIE = Number(document.getElementById("AIE").value);
    // calcula a contagem indicativa
    var resultado = document.getElementById("pfIndicativa");
    var pf = ( ALI * 35 )  + ( AIE * 15 );
    
    resultado.textContent = "PF Indicativa = " + pf;
	GenerateTxtFile("DS05", "indicativa", ("13/09/2018").replace("/","-"), pf);
}
function pfEstimada() {
    // obtém os valores preenchidos pelo analista de pontos de função
    var ALI = Number(document.getElementById("ALIe").value);
    var AIE = Number(document.getElementById("AIEe").value);
    var EE  = Number(document.getElementById("EE").value);
    var SE  = Number(document.getElementById("SE").value);
    var CE  = Number(document.getElementById("CE").value);
    // calcula a contagem estimada
    var resultado = document.getElementById("pfEstimada");
    // Assume que ALI e AIE de baixa complexidade
    // e EE, SE e CE de média complexidade
    var pf = ( ALI * ALIb ) + ( AIE * AIEb ) + ( EE *  EEm ) + ( SE * SEm ) + ( CE * CEm );
    resultado.textContent = "PF Estimada = " + pf;
	var arquivo = "D:\\" + nome + "-" + tipo + "-" + data + ".csv";
	alert("Criando o arquivo " + arquivo);
	GenerateTxtFile("DS05", "estimada", ("13/09/2018").replace("/","-"), pf);
}

function pfDetalhada() {
    // obtém os valores preenchidos pelo analista de pontos de função
    var ALI = Number(document.getElementById("ALId").value);
    var AIE = Number(document.getElementById("AIEd").value);
    var EE  = Number(document.getElementById("EEd").value);
    var SE  = Number(document.getElementById("SEd").value);
    var CE  = Number(document.getElementById("CEd").value);
    var pALI = Number(document.getElementById("cpxALI").value);
    var pAIE = Number(document.getElementById("cpxAIE").value);
    var pEE  = Number(document.getElementById("cpxEE").value);
    var pSE  = Number(document.getElementById("cpxSE").value);
    var pCE  = Number(document.getElementById("cpxCE").value);
    // calcula a contagem detalhada
    var resultado = document.getElementById("pfDetalhada");
    // Busca os pesos de ALI, AIE, EE, SE e CE da dropdownlist
    // e soma os produtos destes com as ALI, AIE, EE, SE e CE informados
    var pf = ( ALI * pALI ) + ( AIE * pAIE ) + ( EE *  pEE ) + ( SE * pSE ) 
           + ( CE * pCE );
    resultado.textContent = "PF Detalhada = " + pf;
	GenerateTxtFile("DS05", "detalhada", ("13/09/2018").replace("/","-"), pf);
}

function Mudarestado(el) {
    var display = document.getElementById(el).style.display;
    if(display == "block")
        document.getElementById(el).style.display = 'none';
    else
        document.getElementById(el).style.display = 'block';
}
// Grava um arquivo
GenerateTxtFile();

// evento para contagem de pontos de função indicativa
var btnIndicativa = document.getElementById("btnIndicativa");
btnIndicativa.addEventListener("click", pfIndicativa);

// evento para contagem de pontos de função estimada
var btnEstimada = document.getElementById("btnEstimada");
btnEstimada.addEventListener("click", pfEstimada);

// evento para contagem de pontos de função estimada
var btnDetalhada = document.getElementById("btnDetalhada");
btnDetalhada.addEventListener("click", pfDetalhada);

