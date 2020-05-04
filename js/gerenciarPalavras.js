//gerar NUMERO ALEATORIO
function gerarNumero(){
	return Math.floor(Math.random() * 165);
}


//GERADORES DE IMAGEM
function gerarImagemVerMais(){
	var num = Math.floor(Math.random() * 8);

	if(num == 0){
		document.getElementById("img_ver").src = "../img/deafault.jpg";
	}else{	
		document.getElementById("img_ver").src = "../img/card"+num+".jpg";
	}	

	
}

//Pegando TEXTOS
function getTexto(num){
	return window.palavras[num];
}

var texto = null;

function configurarVerMais(){
	window.NUMERO_ATUAL = window.NUMERO_DIA;
	document.getElementById('palavra').innerHTML = window.palavras[window.NUMERO_ATUAL];
}


//Controle das palavras
function passarPalavra(){
	var num = (window.NUMERO_ATUAL + 1);

	gerarImagemVerMais();

	if(num > 164){
		num = 1;
		texto = getTexto(num);
		document.getElementById('palavra').innerHTML = texto;
	}else{
		texto = getTexto(num);
		document.getElementById('palavra').innerHTML = texto;
	}
	
	window.NUMERO_ATUAL = num;
}

function voltarPalavra(){
	var num = (window.NUMERO_ATUAL - 1);

	gerarImagemVerMais();

	if(num < 1){
		num = 164;
		texto = getTexto(num);
		document.getElementById('palavra').innerHTML = texto;
	}else{
		texto = getTexto(num);

		document.getElementById('palavra').innerHTML = texto;
	}

	window.NUMERO_ATUAL = num;
}

function aleatoriaPalavra(){
	var num = gerarNumero();
	
	gerarImagemVerMais();

	while(num == 0){
		num = gerarNumero();
	}

	texto = getTexto(num);
	document.getElementById('palavra').innerHTML = texto;
	
	window.NUMERO_ATUAL = num;
}

//Preencher lista
function preencherLista(){
	const lista = document.getElementById('lista');

	for (var num = 1; num < 165; num++) {

		var item = document.createElement('li');

		item.className = "list-group-item";
		
		item.innerHTML = getTexto(num) + "<hr>";

		lista.appendChild(item);
		
	}
}

//PARA O INDEX.HTML
function mudarTextoDia(num){
	document.getElementById('palavradia').innerHTML = window.palavras[num];
}

function chamandoIndex(){
	var num = 0;
	if(window.NUMERO_DIA == undefined || window.NUMERO_DIA == null || window.NUMERO_DIA == NaN){
		num = gerarNumero();
		mudarTextoDia(num);
		window.NUMERO_DIA = num;
	}else{
		mudarTextoDia(window.NUMERO_DIA);
	}
}
