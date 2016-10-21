var http=require('http');

var servidor=http.createServer(function(request,response){
	response.writeHead(200,{'Content-Type':'text/html'});/*aixo fara que envii una capçelera*/
	response.write('<h1>Hello World</h1>');
	response.end();
});

servidor.listen(8888)/*amb aixo activem el server, el 8888 es el port*/
console.log('Servidor iniciat');