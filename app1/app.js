//aixo es per utilitzar un modul [el require() ]. posarem la direccio dins els()
//ens referim a aixo a que ho fem servir per interactuar amb les comandes de un altre arxiu 
var flight=require('./vols');//var flight es el punt d'entrada dels exports de l'altre
//arxiu que indiquem en el require.


flight.setOrigin('Barcelona');
flight.setDestination('London');
flight.setNumber(123);
//amb aixo definim el flight. ara necesitem extreure aquesta info

//per accedir a la info, ho fem a traves del console.log()
console.log(flight.getInfo());