//definim 3 variables
var number,origin,destination;

//definim 4 funcions que s'utilitzaran fora del fitxer, usarem
exports.setNumber=function(num){
	number=num;
//amb el punt indiquem el nom dela funcio a exportar

		
	};

exports.setOrigin=function(o){
 origin=o;


};

exports.setDestination=function(d){
destination=d;

};

exports.getInfo=function(){
//el que volem que retorni es tota la info (numero, origne i destinació). Ho farem 
//amb un getInfo que significa returnar informacio
//Lo que volem esque retorni un objecta en javascript
	return{
		number: number,
		origin: origin,
		destination: destination,
		//hem de entendre que la primera columna son els cams, i la segona son els valors

	};

};