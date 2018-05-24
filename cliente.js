var servidorWebserver = 'ws://localhost:8080'

var websocket

// iniciando conexão
function startConnection(){
	websocket = new ReconnectingWebSocket(servidorWebserver)
	websocket.onopen = function(evt){ onOpen(evt) }
	websocket.onclose = function(evt){ onClose(evt) }
	websocket.onmessage = function(evt){ onMessage(evt) }
	websocket.onerror = function(evt){ onError(evt) } 
}

// JSON.stringify converte o objeto Javascript que deve ser enviado em uma string

// A abertura da conexão se inicia com login
function onOpen(evt){
	console.log('onOpen')
	websocket.send(JSON.stringify({tipo: 'login', conteudo: 'fabio'}))
}

function onClose(evt){

}


function onMessage(evt){
	var msg = evt.data
	console.log(msg)
	document.getElementById('mensagens').innerHTML += msg + '<br>'; 
}


function envia(keycode){
	if(keycode.key == "Enter"){
		let valor = document.getElementById('msg').value;
		websocket.send(JSON.stringify({tipo: 'texto', conteudo: valor}));
		document.getElementById('msg').value = '';
	}
}

function onError(evt){

}

startConnection();