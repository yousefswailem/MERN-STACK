const pokémon = Object.freeze([
        { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
        { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
        { "id": 9,   "name": "Blastoise",  "types": ["water"] },
        { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
        { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
        { "id": 23,  "name": "Ekans",      "types": ["poison"] },
        { "id": 24,  "name": "Arbok",      "types": ["poison"] },
        { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
        { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
        { "id": 52,  "name": "Meowth",     "types": ["normal"] },
        { "id": 63,  "name": "Abra",       "types": ["psychic"] },
        { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
        { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
        { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
        { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
        { "id": 98,  "name": "Krabby",     "types": ["water"] },
        { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
        { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
        { "id": 133, "name": "Eevee",      "types": ["normal"] },
        { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
        { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
        { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
        { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
    ]);


  /*   //1
    const cloneid = pokémon.filter( clone => clone.id % 3 == 0);
    console.log(cloneid);
    
    //2
    const fire = pokémon.filter( f => f.types == "fire");
    console.log(fire); */

    //3
    /* const para = pokémon.filter( p => p.types[1] != undefined);
    console.log(para); */
    
    //4
    /* const para = pokémon.map(p => p.name);
    console.log(para); */
    
    //5
		/* const name = pokémon.filter( p => p.id > 99).map( p => p.name );
		    console.log(name); 
		 */
     
     //6
     /* const para = pokémon.filter( p => p.types=="poison").map(p => p.name);
     console.log(para); */
     
     //7
     /* const para = pokémon.filter( p => p.types[1]=="flying").map(p => p.types[0]);
     console.log(para); */
     
     //8
     /* const para = pokémon.filter( p => p.types=="normal" );
     console.log(para.length+1); */