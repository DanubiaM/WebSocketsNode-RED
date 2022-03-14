var ws;

/*	JSON FORMAT
	"name":"",
	"value":"",
 */
function setConnected(connected){
	$("#connect").prop("connected", connected);
	
}
function connect(){
	ws = new WebSocket('ws://127.0.0.1:1880/graph-data');
	ws.onmessage = function(msg){
		if (msg.data){
			obj =  JSON.parse(msg.data.trim());
			//helloWorld(obj.nome);					
			chartApex.updateSeries([obj.value]);
			
			const paperchart = chartApex.paper();
			const finalchart = paperchart.svg();
			//console.log(finalchart);
		}
	
	}
	setConnected(true);
	
}
function receiveData(){
	return dataReceived;
}

function helloWorld(message){
	$("#helloworldmessage").append(" "+ message + "");
}

$(function(){
	$("form").on('submit', function(e){
		e.preventDefault();
	});
	
	$("#connect").click(function(){
		connect();			
	});
});


        