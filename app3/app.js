//aixo es per utilitzar un modul [el require() ]. posarem la direccio dins els()
//ens referim a aixo a que ho fem servir per interactuar amb les comandes de un altre arxiu 
var Flight=require('./vols');//var flight es el punt d'entrada dels exports de l'altre
//arxiu que indiquem en el require.
/*

flight.setOrigin('Barcelona');
flight.setDestination('London');
flight.setNumber(123);
//amb aixo definim el flight. ara necesitem extreure aquesta info

//per accedir a la info, ho fem a traves del console.log()
console.log(flight.getInfo());*/
//------------------------------------------------------------------
//21.10.2016
var pl_data1={

	number:847,
	origin:'BCN',
	destination:'MAD'
};

var pl_data2={

	number:848,
	origin:'MAD',
	destination:'BCN'
};
//crear avió
var pl1=new Flight();
pl1.fill(pl_data1);
//crear avio2
var pl2=new Flight();
pl2.fill(pl_data2);

//sortida de l'avió.
pl1.triggerDepart();
pl2.triggerDepart();

console.log(pl1.getInformation());
console.log(pl2.getInformation());

