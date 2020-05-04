window.NUMERO_DIA = 10;//retirar
window.NUMERO_ATUAL;

var data = new Date();

var hora = data.getHours();
var seg = data.getMinutes();


var intervalo = window.setInterval(function() {
   if(hora == 6 || hora < 7){
		window.NUMERO_DIA = Math.floor(Math.random() * 165);;
	}
}, 3600000);//a cada uma hora será executada está função.

