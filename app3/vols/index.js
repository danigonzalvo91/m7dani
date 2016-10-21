
var Flight=function()
{
//atributs del objecte Flight	
	    this.data={
		number:null,
		origin:null,
		destination:null,
		departs:null,
		arrives:null,
		actualDepart:null,
		actualArrive:null

		};//en el ultim null no posem , posem ; al final del objecte

	//definició de funcions o metodes
	//1-crearem un bucle per definir atributs
	/**
	* fill: omplir atributs de Flight
	* 
	**/
	this.fill=function(info){
	for(var prop in this.data)//cada prop es camp:valor declarats en array
		{
		if(this.data[prop]!=='undefined')//es a dir, que values[prop] no es indentic a
		//a undefinit
			{
				this.data[prop]=info[prop];

			}
		}

	};//final de this.fill
	
		
			//actualitzara les dates de sortida
			this.triggerDepart=function()
			{
				this.data.actualDepart=Date.now();//objecte de javascript que ens diu
												//la data dle sistema

			};
			this.triggerArrive=function()
			{
				this.data.actualArrive=Date.now();
			};

			this.getInformation=function()
			{
				return this.data;

			};
};	

module.exports=Flight;



